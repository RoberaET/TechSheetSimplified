"use client"

import { Suspense, useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import {
  ArrowLeft,
  Monitor,
  Shield,
  HardDrive,
  Wifi,
  Cpu,
  Zap,
  Thermometer,
  Weight,
  Ruler,
  Network,
  Database,
  Clock,
  Settings,
  Search,
  Filter,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { deviceData, type Device, type DeviceCategory } from "@/lib/devices"

// Using shared device data from lib/devices

function DeviceSpecsContent() {
  const searchParams = useSearchParams()
  const deviceType = searchParams.get("type") || ""
  const series = searchParams.get("series") || ""

  const [searchQuery, setSearchQuery] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const [selectedDeviceIds, setSelectedDeviceIds] = useState<string[]>([])
  // comparison uses dedicated page now

  const getDevices = () => {
    if (!deviceType) return []

    if (deviceType === "Mini FTTO") {
      const mini = deviceData["Mini FTTO"] as Device[]
      if (series) {
        return mini.filter((device) => device.series === series)
      }
      return mini || []
    }

    const categoryData = deviceData[deviceType] as DeviceCategory
    if (!categoryData || typeof categoryData !== "object") return []

    if (Array.isArray(categoryData)) {
      return series ? categoryData.filter((d) => d.series === series) : categoryData
    }

    // Handle SME group selections (Firewall, Router, Switches, WLAN)
    if (deviceType === "SME" && series) {
      const groupToSeriesMap: Record<string, string[]> = {
        Firewall: ["USG6000E Series", "USG9500 Series", "HiSecEngine Series"],
        Router: ["AR303", "AR303W", "Core Router", "S380"],
        Switches: ["Core switch", "L2 Switch", "L2+ Switch", "L3 Switch"],
        WLAN: ["Access Controller", "Access Point"],
      }
      // Model-to-series mapping so model-level selections show results
      const modelToSeriesMap: Record<string, string> = {
        S110: "L2 Switch",
        S220: "L2 Switch",
        S220S: "L2 Switch",
        S310: "L2+ Switch",
        S310S: "L2+ Switch",
        S530: "L3 Switch",
      }
      if (series in modelToSeriesMap) {
        const mapped = modelToSeriesMap[series]
        const bySeries = categoryData as Record<string, Device[]>
        return bySeries[mapped] || []
      }
      const mappedSeries = groupToSeriesMap[series]
      if (mappedSeries && !(series in (categoryData as Record<string, Device[]>))) {
        const bySeries = categoryData as Record<string, Device[]>
        return mappedSeries.flatMap((s) => bySeries[s] || [])
      }
    }

    if (series && series in categoryData) {
      return (categoryData as Record<string, Device[]>)[series] || []
    }

    // Return all devices in category if no specific series
    return Object.values(categoryData).flat()
  }

  const devices = getDevices() as Device[]

  const filteredDevices = useMemo(() => {
    let filtered = devices

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter((device) => {
        const searchLower = searchQuery.toLowerCase()

        // Search in device name and model
        if (device.name.toLowerCase().includes(searchLower) || device.model.toLowerCase().includes(searchLower)) {
          return true
        }

        // Search in specifications
        return Object.entries(device.specs).some(([key, value]) => {
          return key.toLowerCase().includes(searchLower) || String(value).toLowerCase().includes(searchLower)
        })
      })
    }

    // Filter by specification category
    if (filterCategory !== "all") {
      filtered = filtered.filter((device) => {
        const specs = Object.keys(device.specs).map((key) => key.toLowerCase())

        switch (filterCategory) {
          case "display":
            return specs.some(
              (spec) =>
                spec.includes("display") ||
                spec.includes("screen") ||
                spec.includes("resolution") ||
                spec.includes("refresh"),
            )
          case "camera":
            return specs.some((spec) => spec.includes("camera"))
          case "processor":
            return specs.some(
              (spec) =>
                spec.includes("processor") ||
                spec.includes("cpu") ||
                spec.includes("system") ||
                spec.includes("memory"),
            )
          case "meeting":
            return specs.some(
              (spec) => spec.includes("meeting") || spec.includes("conference") || spec.includes("projection"),
            )
          case "accessories":
            return specs.some((spec) => spec.includes("accessories") || spec.includes("components"))
          case "connectivity":
            return specs.some(
              (spec) =>
                spec.includes("ports") ||
                spec.includes("wireless") ||
                spec.includes("connection") ||
                spec.includes("wifi"),
            )
          case "audio":
            return specs.some(
              (spec) => spec.includes("speaker") || spec.includes("microphone") || spec.includes("audio"),
            )
          default:
            return true
        }
      })
    }

    return filtered
  }, [devices, searchQuery, filterCategory])

  const selectedDevices = useMemo(
    () => filteredDevices.filter((d) => selectedDeviceIds.includes(d.id)),
    [filteredDevices, selectedDeviceIds]
  )

  function toggleSelect(deviceId: string, checked: boolean) {
    setSelectedDeviceIds((prev) => {
      if (checked) {
        if (prev.includes(deviceId)) return prev
        return [...prev, deviceId]
      }
      return prev.filter((id) => id !== deviceId)
    })
  }

  function clearSelection() {
    setSelectedDeviceIds([])
  }

  function extractFirstNumber(value: string): number | null {
    if (!value) return null
    const match = value.replace(/,/g, "").match(/-?\d+(?:\.\d+)?/g)
    if (!match || match.length === 0) return null
    const nums = match.map((n) => parseFloat(n)).filter((n) => !Number.isNaN(n))
    if (nums.length === 0) return null
    // Heuristic: if there are multiple numbers (like 65", 75", 86"), use the max
    return Math.max(...nums)
  }

  function lowerIsBetter(specKey: string): boolean {
    const key = specKey.toLowerCase()
    return (
      key.includes("latency") ||
      key.includes("distortion") ||
      key.includes("temperature") ||
      key.includes("weight") ||
      key.includes("consumption") ||
      key.includes("noise")
    )
  }

  function higherIsBetter(specKey: string): boolean {
    const key = specKey.toLowerCase()
    return (
      key.includes("resolution") ||
      key.includes("refresh") ||
      key.includes("frequency") ||
      key.includes("power") ||
      key.includes("throughput") ||
      key.includes("capacity") ||
      key.includes("volume") ||
      key.includes("rate") ||
      key.includes("ports") ||
      key.includes("ram") ||
      key.includes("memory") ||
      key.includes("flash")
    )
  }

  function getWinnersForSpec(specKey: string, devicesToCompare: Device[]): Set<string> {
    const numericValues = devicesToCompare.map((d) => ({
      id: d.id,
      value: extractFirstNumber(String((d.specs as Record<string, string>)[specKey] ?? "")),
    }))

    const valid = numericValues.filter((v) => v.value !== null) as { id: string; value: number }[]
    if (valid.length === 0) return new Set()

    let best: number
    if (lowerIsBetter(specKey) && !higherIsBetter(specKey)) {
      best = Math.min(...valid.map((v) => v.value))
    } else {
      best = Math.max(...valid.map((v) => v.value))
    }
    const winners = new Set(valid.filter((v) => v.value === best).map((v) => v.id))
    return winners
  }

  const clearFilters = () => {
    setSearchQuery("")
    setFilterCategory("all")
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "IdeaHubs":
        return Monitor
      case "SME":
        return Shield
      case "Storage":
        return HardDrive
      case "Mini FTTO":
        return Wifi
      default:
        return Settings
    }
  }

  const CategoryIcon = getCategoryIcon(deviceType)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center space-x-3">
              <CategoryIcon className="h-6 w-6 text-primary" />
              <div>
                <h1 className="text-2xl font-bold">{deviceType} Devices</h1>
                {series && <p className="text-muted-foreground">{series}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Device Specifications */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {devices.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <CategoryIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">No Devices Found</h2>
              <p className="text-muted-foreground mb-6">No devices found for the selected category and series.</p>
              <Link href="/">
                <Button>Return to Home</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2">Device Specifications</h2>
              <p className="text-muted-foreground">
                Detailed technical specifications for {deviceType} devices
                {series && ` in the ${series} series`}
              </p>
            </div>

            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  <h3 className="text-lg font-semibold">Search & Filter Devices</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Search Input */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search devices, specs, features..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  {/* Filter by Category */}
                  <Select value={filterCategory} onValueChange={setFilterCategory}>
                    <SelectTrigger>
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filter by specification" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Specifications</SelectItem>
                      <SelectItem value="display">Display & Quality</SelectItem>
                      <SelectItem value="camera">Camera Quality</SelectItem>
                      <SelectItem value="processor">Processor & System</SelectItem>
                      <SelectItem value="meeting">Meeting Support</SelectItem>
                      <SelectItem value="accessories">Accessories</SelectItem>
                      <SelectItem value="connectivity">Connectivity & Ports</SelectItem>
                      <SelectItem value="audio">Audio & Microphone</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* Clear Filters */}
                  {(searchQuery || filterCategory !== "all") && (
                    <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
                      <X className="h-4 w-4 mr-2" />
                      Clear Filters
                    </Button>
                  )}
                </div>

                {/* Results Count */}
                <div className="flex items-center justify-between pt-2">
                  <Badge variant="outline">
                    {filteredDevices.length} of {devices.length} device{devices.length !== 1 ? "s" : ""} shown
                  </Badge>
                  {(searchQuery || filterCategory !== "all") && (
                    <p className="text-sm text-muted-foreground">
                      {searchQuery && `Searching for "${searchQuery}"`}
                      {searchQuery && filterCategory !== "all" && " • "}
                      {filterCategory !== "all" && `Filtered by ${filterCategory}`}
                    </p>
                  )}
                </div>
              </div>
            </Card>

            {filteredDevices.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h2 className="text-xl font-semibold mb-2">No Matching Devices</h2>
                  <p className="text-muted-foreground mb-6">
                    No devices match your current search and filter criteria.
                  </p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-8">
                {/* Compare dropdown */}
                <div className="flex items-center justify-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button>Compare Devices</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-80">
                      {filteredDevices.map((d) => (
                        <DropdownMenuItem key={d.id} onSelect={(e) => e.preventDefault()}>
                          <div className="flex items-center gap-2 w-full" onClick={(e) => e.stopPropagation()}>
                            <Checkbox
                              aria-label={`Select ${d.name} for comparison`}
                              checked={selectedDeviceIds.includes(d.id)}
                              onCheckedChange={(value) => toggleSelect(d.id, Boolean(value))}
                            />
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium truncate">{d.name}</div>
                              <div className="text-xs text-muted-foreground truncate">{d.model} • {d.series}</div>
                            </div>
                          </div>
                        </DropdownMenuItem>
                      ))}
                      <DropdownMenuItem
                        onSelect={(e) => {
                          e.preventDefault()
                          if (selectedDeviceIds.length >= 2) {
                            const params = new URLSearchParams({ ids: selectedDeviceIds.join(",") })
                            window.location.href = `/compare?${params.toString()}`
                          }
                        }}
                        disabled={selectedDeviceIds.length < 2}
                      >
                        <span className="font-semibold">Confirm Compare ({selectedDeviceIds.length})</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={clearSelection} disabled={selectedDeviceIds.length === 0}>
                        Clear Selection
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                {filteredDevices.map((device) => (
                  <Card key={device.id} className="overflow-hidden">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-2xl">{device.name}</CardTitle>
                          <CardDescription className="text-lg mt-1">Model: {device.model}</CardDescription>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <Badge variant="secondary">{device.category}</Badge>
                          <Badge variant="outline">{device.series}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(device.specs).map(([key, value]) => {
                          const getSpecIcon = (specKey: string) => {
                            switch (specKey.toLowerCase()) {
                              case "display":
                              case "resolution":
                                return Monitor
                              case "processor":
                              case "cpu":
                                return Cpu
                              case "power":
                                return Zap
                              case "temperature":
                                return Thermometer
                              case "weight":
                                return Weight
                              case "dimensions":
                              case "product dimensions":
                              case "dimensions rolling stand":
                              case "dimensions wall-mounted":
                                return Ruler
                              case "connectivity":
                              case "ports":
                              case "wifi":
                              case "fiber":
                              case "wi-fi module":
                              case "wi-fi frequency":
                              case "audio video input port":
                              case "power supply port":
                                return Network
                              case "memory":
                              case "storage":
                              case "capacity":
                                return Database
                              case "throughput":
                              case "performance":
                              case "switching":
                              case "refresh rate":
                              case "led lifetime":
                              case "speaker quantity":
                              case "rated power":
                              case "maximum volume":
                              case "frequency response":
                              case "call bandwidth":
                              case "dual-stream resolution":
                              case "doubled frame rate":
                                return Clock
                              default:
                                return Settings
                            }
                          }

                          const SpecIcon = getSpecIcon(key)

                          return (
                            <div key={key} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                              <SpecIcon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <div className="min-w-0 flex-1">
                                <dt className="text-sm font-medium text-muted-foreground capitalize">
                                  {key.replace(/([A-Z])/g, " $1").trim()}
                                </dt>
                                <dd className="text-sm font-semibold text-foreground mt-1 break-words">{value}</dd>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* No dialog: navigate to /compare instead */}
    </div>
  )
}

export default function DeviceSpecsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading device specifications...</p>
          </div>
        </div>
      }
    >
      <DeviceSpecsContent />
    </Suspense>
  )
}
