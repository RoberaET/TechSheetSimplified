"use client"

import {
  Search,
  ChevronRight,
  Upload,
  Wifi,
  Shield,
  HardDrive,
  Monitor,
  Router,
  Camera,
  Mic,
  ChevronDown,
  Folder,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const [selectedDeviceType, setSelectedDeviceType] = useState<string>("")
  const [selectedSeries, setSelectedSeries] = useState<string>("")
  const router = useRouter()

  const handleFindDevices = () => {
    if (!selectedDeviceType) {
      alert("Please select a device type first")
      return
    }

    const params = new URLSearchParams()
    params.set("type", selectedDeviceType)
    if (selectedSeries) {
      params.set("series", selectedSeries)
    }

    router.push(`/devices?${params.toString()}`)
  }

  const getSeriesOptions = () => {
    if (selectedDeviceType === "IdeaHubs") {
      return [
        { value: "ideahub-b", label: "IdeaHub B Series", icon: Monitor },
        { value: "ideahub-board", label: "IdeaHub Board Series", icon: Monitor },
        { value: "ideahub-s2", label: "IdeaHub S2 Series", icon: Monitor },
        { value: "ideapresence", label: "IdeaPresence", icon: Monitor },
      ]
    }
    return []
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded bg-primary"></div>
                <span className="text-xl font-bold text-foreground">DeviceCompare</span>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <a
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Categories
                </a>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <span>Vendors</span>
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    <DropdownMenuItem>
                      <a href="#" className="w-full">
                        Cisco
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="#" className="w-full">
                        Fortinet
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="#" className="w-full">
                        Palo Alto Networks
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="#" className="w-full">
                        Juniper Networks
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="#" className="w-full">
                        Ubiquiti Networks
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="#" className="w-full">
                        Arista Networks
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="#" className="w-full">
                        Check Point
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="#" className="w-full font-semibold text-primary">
                        Huawei
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="#" className="w-full">
                        MikroTik
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <a href="#" className="w-full">
                        Dell Networking
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <a
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Quick search..." className="w-64 pl-10" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6">
            <span className="text-primary">Huawei</span> Device Comparison Platform
          </h1>
          <p className="text-xl text-muted-foreground text-balance mb-12 max-w-3xl mx-auto">
            Compare Huawei switches, routers, firewalls, storage, IdeaHubs and more. Enter specs or pick a device to
            discover alternatives within the Huawei ecosystem.
          </p>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Enter Huawei device model, specs, or requirements..."
                  className="h-14 pl-12 text-lg"
                />
              </div>
              <Button size="lg" className="h-14 px-8">
                Search Devices
              </Button>
            </div>

            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="h-12 flex-1 justify-between bg-transparent">
                    <span>{selectedDeviceType || "Select Device Type"}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-full">
                  <DropdownMenuItem
                    onSelect={() => {
                      setSelectedDeviceType("IdeaHubs")
                      setSelectedSeries("") // Reset series when device type changes
                    }}
                    onClick={() => {
                      setSelectedDeviceType("IdeaHubs")
                      setSelectedSeries("") // Reset series when device type changes
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <Monitor className="h-4 w-4" />
                      <span>IdeaHubs</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => {
                      setSelectedDeviceType("SME")
                      setSelectedSeries("")
                    }}
                    onClick={() => {
                      setSelectedDeviceType("SME")
                      setSelectedSeries("")
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4" />
                      <span>SME</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => {
                      setSelectedDeviceType("Storage")
                      setSelectedSeries("")
                    }}
                    onClick={() => {
                      setSelectedDeviceType("Storage")
                      setSelectedSeries("")
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <HardDrive className="h-4 w-4" />
                      <span>Storage</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => {
                      setSelectedDeviceType("Mini FTTO")
                      setSelectedSeries("")
                    }}
                    onClick={() => {
                      setSelectedDeviceType("Mini FTTO")
                      setSelectedSeries("")
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <Wifi className="h-4 w-4" />
                      <span>Mini FTTO</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-12 flex-1 justify-between bg-transparent"
                    disabled={!selectedDeviceType} // Disable if no device type selected
                  >
                    <span className="text-foreground">
                      {selectedSeries ||
                        (selectedDeviceType
                          ? selectedDeviceType === "SME"
                            ? "Select Category or Series"
                            : "Select Series"
                          : "Select Device Type First")}
                    </span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-full">
                  {selectedDeviceType === "IdeaHubs" && (
                    <>
                      <DropdownMenuItem onSelect={() => setSelectedSeries("IdeaHub B Series")} onClick={() => setSelectedSeries("IdeaHub B Series")}>
                        <div className="flex items-center space-x-2">
                          <Monitor className="h-4 w-4" />
                          <span>IdeaHub B Series</span>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => setSelectedSeries("IdeaHub Board Series")} onClick={() => setSelectedSeries("IdeaHub Board Series")}>
                        <div className="flex items-center space-x-2">
                          <Monitor className="h-4 w-4" />
                          <span>IdeaHub Board Series</span>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          <div className="flex items-center space-x-2">
                            <span>IdeaHub Components</span>
                          </div>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              <div className="flex items-center space-x-2">
                                <Folder className="h-4 w-4" />
                                <span>Accessories</span>
                              </div>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent>
                              <DropdownMenuSub>
                                <DropdownMenuSubTrigger>
                                  <div className="flex items-center space-x-2">
                                    <Camera className="h-4 w-4" />
                                    <span>Camera</span>
                                  </div>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuSubContent>
                                  <DropdownMenuItem onSelect={() => setSelectedSeries("IdeaHub Camera 1080p")} onClick={() => setSelectedSeries("IdeaHub Camera 1080p")}>
                                    <span>IdeaHub Camera 1080p</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onSelect={() => setSelectedSeries("IdeaHub Camera 4K")} onClick={() => setSelectedSeries("IdeaHub Camera 4K")}>
                                    <span>IdeaHub Camera 4K</span>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onSelect={() => setSelectedSeries("IdeaHub Camera Pro")} onClick={() => setSelectedSeries("IdeaHub Camera Pro")}>
                                    <span>IdeaHub Camera Pro</span>
                                  </DropdownMenuItem>
                                </DropdownMenuSubContent>
                              </DropdownMenuSub>
                              <DropdownMenuItem onSelect={() => setSelectedSeries("IdeaHub Microphone")} onClick={() => setSelectedSeries("IdeaHub Microphone")}>
                                <div className="flex items-center space-x-2">
                                  <Mic className="h-4 w-4" />
                                  <span>Microphone</span>
                                </div>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                      <DropdownMenuItem onSelect={() => setSelectedSeries("IdeaHub S2 Series")} onClick={() => setSelectedSeries("IdeaHub S2 Series")}>
                        <div className="flex items-center space-x-2">
                          <Monitor className="h-4 w-4" />
                          <span>IdeaHub S2 Series</span>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => setSelectedSeries("IdeaPresence")} onClick={() => setSelectedSeries("IdeaPresence")}>
                        <div className="flex items-center space-x-2">
                          <Monitor className="h-4 w-4" />
                          <span>IdeaPresence</span>
                        </div>
                      </DropdownMenuItem>
                    </>
                  )}
                  {selectedDeviceType === "SME" && (
                    <>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger
                          onSelect={() => setSelectedSeries("Firewall")}
                          onClick={() => setSelectedSeries("Firewall")}
                        >
                          <div className="flex items-center space-x-2">
                            <Folder className="h-4 w-4" />
                            <span>Firewall</span>
                          </div>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem onSelect={() => setSelectedSeries("USG6000E Series")} onClick={() => setSelectedSeries("USG6000E Series")}>
                            <span>USG6000E Series</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => setSelectedSeries("USG9500 Series")} onClick={() => setSelectedSeries("USG9500 Series")}>
                            <span>USG9500 Series</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => setSelectedSeries("HiSecEngine Series")} onClick={() => setSelectedSeries("HiSecEngine Series")}>
                            <span>HiSecEngine Series</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger
                          onSelect={() => setSelectedSeries("Router")}
                          onClick={() => setSelectedSeries("Router")}
                        >
                          <div className="flex items-center space-x-2">
                            <Folder className="h-4 w-4" />
                            <span>Router</span>
                          </div>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem onSelect={() => setSelectedSeries("AR303")} onClick={() => setSelectedSeries("AR303")}>
                            <span>AR303</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => setSelectedSeries("AR303W")} onClick={() => setSelectedSeries("AR303W")}>
                            <span>AR303W</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => setSelectedSeries("Core Router")} onClick={() => setSelectedSeries("Core Router")}>
                            <span>Core Router</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => setSelectedSeries("S380")} onClick={() => setSelectedSeries("S380")}>
                            <span>S380</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger
                          onSelect={() => setSelectedSeries("Switches")}
                          onClick={() => setSelectedSeries("Switches")}
                        >
                          <div className="flex items-center space-x-2">
                            <Folder className="h-4 w-4" />
                            <span>Switches</span>
                          </div>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                          {/* Core Switch direct */}
                          <DropdownMenuItem onSelect={() => setSelectedSeries("Core switch")} onClick={() => setSelectedSeries("Core switch")}>
                            <span>Core Switch</span>
                          </DropdownMenuItem>

                          {/* L2 Switches with models */}
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              <div className="flex items-center space-x-2">
                                <span>L2 Switches</span>
                              </div>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent>
                              <DropdownMenuItem onSelect={() => setSelectedSeries("L2 Switch")} onClick={() => setSelectedSeries("L2 Switch")}>
                                <span>S110</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem onSelect={() => setSelectedSeries("L2 Switch")} onClick={() => setSelectedSeries("L2 Switch")}>
                                <span>S220</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem onSelect={() => setSelectedSeries("L2 Switch")} onClick={() => setSelectedSeries("L2 Switch")}>
                                <span>S220S</span>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>

                          {/* L2+ Switch with models */}
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              <div className="flex items-center space-x-2">
                                <span>L2+ Switch</span>
                              </div>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent>
                              <DropdownMenuItem onSelect={() => setSelectedSeries("L2+ Switch")} onClick={() => setSelectedSeries("L2+ Switch")}>
                                <span>S310</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem onSelect={() => setSelectedSeries("L2+ Switch")} onClick={() => setSelectedSeries("L2+ Switch")}>
                                <span>S310S</span>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>

                          {/* L3 Switches with model */}
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              <div className="flex items-center space-x-2">
                                <span>L3 Switches</span>
                              </div>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent>
                              <DropdownMenuItem onSelect={() => setSelectedSeries("L3 Switch")} onClick={() => setSelectedSeries("L3 Switch")}>
                                <span>S530</span>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger
                          onSelect={() => setSelectedSeries("WLAN")}
                          onClick={() => setSelectedSeries("WLAN")}
                        >
                          <div className="flex items-center space-x-2">
                            <Folder className="h-4 w-4" />
                            <span>WLAN</span>
                          </div>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem onSelect={() => setSelectedSeries("Access Controller")} onClick={() => setSelectedSeries("Access Controller")}>
                            <span>Access Controller</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => setSelectedSeries("Access Point")} onClick={() => setSelectedSeries("Access Point")}>
                            <span>Access Point</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuSub>
                    </>
                  )}
                  {selectedDeviceType === "Storage" && (
                    <>
                      <DropdownMenuItem onSelect={() => setSelectedSeries("ekitStorXtreme 200E")} onClick={() => setSelectedSeries("ekitStorXtreme 200E")}>
                        <div className="flex items-center space-x-2">
                          <HardDrive className="h-4 w-4" />
                          <span>ekitStorXtreme 200E</span>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => setSelectedSeries("Entry Level Storage")} onClick={() => setSelectedSeries("Entry Level Storage")}>
                        <div className="flex items-center space-x-2">
                          <HardDrive className="h-4 w-4" />
                          <span>Entry Level Storage</span>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => setSelectedSeries("OceanStor 5300 V5")} onClick={() => setSelectedSeries("OceanStor 5300 V5")}>
                        <div className="flex items-center space-x-2">
                          <HardDrive className="h-4 w-4" />
                          <span>OceanStor 5300 V5</span>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => setSelectedSeries("OceanStor 2600 V5")} onClick={() => setSelectedSeries("OceanStor 2600 V5")}>
                        <div className="flex items-center space-x-2">
                          <HardDrive className="h-4 w-4" />
                          <span>OceanStor 2600 V5</span>
                        </div>
                      </DropdownMenuItem>
                    </>
                  )}
                  {selectedDeviceType === "Mini FTTO" && (
                    <>
                      <DropdownMenuItem onSelect={() => setSelectedSeries("ONT Devices")} onClick={() => setSelectedSeries("ONT Devices")}>
                        <div className="flex items-center space-x-2">
                          <Wifi className="h-4 w-4" />
                          <span>ONT Devices</span>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => setSelectedSeries("Fiber Solutions")} onClick={() => setSelectedSeries("Fiber Solutions")}>
                        <div className="flex items-center space-x-2">
                          <Wifi className="h-4 w-4" />
                          <span>Fiber Solutions</span>
                        </div>
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => setSelectedSeries("Access Points")} onClick={() => setSelectedSeries("Access Points")}>
                        <div className="flex items-center space-x-2">
                          <Wifi className="h-4 w-4" />
                          <span>Access Points</span>
                        </div>
                      </DropdownMenuItem>
                    </>
                  )}
                  {!selectedDeviceType && (
                    <DropdownMenuItem disabled>
                      <span className="text-muted-foreground">Please select a device type first</span>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button size="lg" className="h-12 px-6" onClick={handleFindDevices}>
                Find Devices
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tree Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Huawei Device Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Monitor className="h-8 w-8 text-primary" />
                  <CardTitle>IdeaHubs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>IdeaHub B Series</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>IdeaHub Board Series</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>IdeaHub Components</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="ml-4 space-y-1">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Camera className="h-3 w-3" />
                        <span>Camera</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Mic className="h-3 w-3" />
                        <span>Microphone</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>IdeaHub S2 Series</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>IdeaPresence</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-primary" />
                  <CardTitle>SME</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Firewall</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Router</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Switches</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>WLAN</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>Storage</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="ml-4 space-y-1">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <HardDrive className="h-3 w-3" />
                        <span>ekitStorXtreme 200E</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <HardDrive className="h-3 w-3" />
                        <span>Entry Level Storage</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <HardDrive className="h-8 w-8 text-primary" />
                  <CardTitle>Storage</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>OceanStor</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>All-Flash</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Hybrid</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Wifi className="h-8 w-8 text-primary" />
                  <CardTitle>Mini FTTO</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>ONT Devices</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Fiber Solutions</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Access Points</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Comparisons */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Comparisons</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Switch Comparison</span>
                  <Badge variant="secondary">Popular</Badge>
                </CardTitle>
                <CardDescription>Enterprise-grade network switches</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Router className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold">S5735-L48T4S-A</h4>
                    <p className="text-sm text-muted-foreground">48-port switch</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="w-16 h-16 bg-accent/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Router className="h-8 w-8 text-accent" />
                    </div>
                    <h4 className="font-semibold">S5735-L24T4S-A</h4>
                    <p className="text-sm text-muted-foreground">24-port switch</p>
                  </div>
                </div>
                <Button className="w-full bg-transparent" variant="outline">
                  View Comparison
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Storage Solutions</span>
                  <Badge variant="secondary">New</Badge>
                </CardTitle>
                <CardDescription>High-performance storage systems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <HardDrive className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="font-semibold">OceanStor 5300 V5</h4>
                    <p className="text-sm text-muted-foreground">All-flash array</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="w-16 h-16 bg-accent/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <HardDrive className="h-8 w-8 text-accent" />
                    </div>
                    <h4 className="font-semibold">OceanStor 2600 V5</h4>
                    <p className="text-sm text-muted-foreground">Hybrid storage</p>
                  </div>
                </div>
                <Button className="w-full bg-transparent" variant="outline">
                  View Comparison
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <Upload className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Upload a Datasheet</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a device datasheet? Upload it to find similar devices and alternatives in our database.
            </p>
            <Button size="lg" className="px-8">
              Upload Datasheet
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded bg-primary"></div>
                <span className="font-bold">DeviceCompare</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The ultimate platform for comparing and discovering Huawei network devices and infrastructure solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Comparisons
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Search
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>support@devicecompare.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Mon-Fri 9AM-6PM EST</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 DeviceCompare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
