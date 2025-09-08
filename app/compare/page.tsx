"use client"

import { useMemo } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getAllDevices, type Device } from "@/lib/devices"

function extractFirstNumber(value: string): number | null {
  if (!value) return null
  const match = value.replace(/,/g, "").match(/-?\d+(?:\.\d+)?/g)
  if (!match || match.length === 0) return null
  const nums = match.map((n) => parseFloat(n)).filter((n) => !Number.isNaN(n))
  if (nums.length === 0) return null
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
    value: extractFirstNumber(String(d.specs[specKey] ?? "")),
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

export default function ComparePage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const ids = (searchParams.get("ids") || "").split(",").filter(Boolean)

  const allDevices = getAllDevices()
  const selectedDevices = useMemo(() => {
    return allDevices.filter((d) => ids.includes(d.id))
  }, [allDevices, ids])

  const allSpecKeys = useMemo(() => {
    return Array.from(
      new Set(selectedDevices.flatMap((d) => Object.keys(d.specs)))
    )
  }, [selectedDevices])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Button variant="outline" size="sm" className="bg-transparent" onClick={() => router.back()}>
                Back
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              {selectedDevices.length} selected
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Device Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDevices.length < 2 ? (
              <p className="text-sm text-muted-foreground">Add at least two device IDs via the "ids" query param, e.g. /compare?ids=ideahub-b2,ideahub-b3</p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="sticky left-0 bg-background z-10">Specification</TableHead>
                      {selectedDevices.map((d) => (
                        <TableHead key={d.id}>{d.name}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allSpecKeys.map((specKey) => {
                      const winners = getWinnersForSpec(specKey, selectedDevices)
                      return (
                        <TableRow key={specKey}>
                          <TableCell className="font-medium capitalize sticky left-0 bg-background z-10">
                            {specKey.replace(/([A-Z])/g, " $1").trim()}
                          </TableCell>
                          {selectedDevices.map((d) => {
                            const raw = d.specs[specKey]
                            const isWinner = winners.has(d.id)
                            return (
                              <TableCell key={d.id} className={isWinner ? "bg-green-100 text-foreground dark:bg-green-900/30" : undefined}>
                                {raw ?? "-"}
                              </TableCell>
                            )
                          })}
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


