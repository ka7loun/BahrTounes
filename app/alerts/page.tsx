"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Filter, MapPin } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import dynamic from "next/dynamic"
import type { Alert } from "@/types/alert"

// Sample data for alerts - removed the green (Trapped Animal) and purple (Habitat Destruction) dots
const alerts: Alert[] = [
  {
    id: 1,
    type: "Illegal Fishing",
    location: "Gulf of Tunis, near Bizerte",
    date: "2023-04-15",
    status: "Verified",
    description: "Large vessel spotted using drift nets in protected area near Zembra Island.",
    coordinates: [37.05, 10.15], // Northern Tunisia (red marker)
  },
  {
    id: 2,
    type: "Pollution",
    location: "Sfax Coast",
    date: "2023-04-12",
    status: "Under Investigation",
    description: "Oil spill affecting approximately 500m of coastline near industrial area.",
    coordinates: [34.74, 10.76], // Sfax (orange marker)
  },
  {
    id: 4,
    type: "Illegal Fishing",
    location: "Near Gabès",
    date: "2023-04-08",
    status: "Verified",
    description: "Multiple boats using prohibited equipment in marine sanctuary near the gulf.",
    coordinates: [33.88, 10.1], // Southern Tunisia (red marker)
  },
]

// Dynamically import the Map component with no SSR
const MapComponent = dynamic(() => import("@/components/map-component"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-video bg-muted flex items-center justify-center">
      <p>Loading map...</p>
    </div>
  ),
})

export default function AlertsPage() {
  const [filter, setFilter] = useState("all")
  const [selectedAlert, setSelectedAlert] = useState<number | null>(null)

  const filteredAlerts = filter === "all" ? alerts : alerts.filter((alert) => alert.type.toLowerCase() === filter)

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Recent Alerts</h1>
          <p className="text-muted-foreground mt-2">Verified reports from our community members</p>
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Reports</SelectItem>
              <SelectItem value="illegal fishing">Illegal Fishing</SelectItem>
              <SelectItem value="pollution">Pollution</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="map">Map View</TabsTrigger>
        </TabsList>
        <TabsContent value="list" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredAlerts.map((alert) => (
              <Card key={alert.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{alert.type}</CardTitle>
                    <StatusBadge status={alert.status} />
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {alert.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-2">{alert.description}</p>
                  <p className="text-xs text-muted-foreground">Reported on: {alert.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAlerts.length === 0 && (
            <div className="text-center py-12">
              <AlertTriangle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No alerts found</h3>
              <p className="text-muted-foreground">No reports matching your filter criteria</p>
            </div>
          )}
        </TabsContent>
        <TabsContent value="map" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Tunisia Coastal Alerts Map</CardTitle>
              <CardDescription>Interactive map showing reported incidents along Tunisia's coastline</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <MapComponent alerts={filteredAlerts} selectedAlert={selectedAlert} setSelectedAlert={setSelectedAlert} />

              <div className="mt-4 flex flex-wrap gap-3 justify-center">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-xs">Illegal Fishing</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-xs">Pollution</span>
                </div>
              </div>

              <p className="text-xs text-center text-muted-foreground mt-4">
                Click on a marker to view incident details. Use the filter above to show specific incident types.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  let variant: "default" | "outline" | "secondary" | "destructive" = "default"

  switch (status) {
    case "Verified":
      variant = "default"
      break
    case "Under Investigation":
      variant = "secondary"
      break
    case "Resolved":
      variant = "outline"
      break
    default:
      variant = "default"
  }

  return <Badge variant={variant}>{status}</Badge>
}
