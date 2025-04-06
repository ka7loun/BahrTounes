"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Filter, MapPin } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data for alerts
const alerts = [
  {
    id: 1,
    type: "Illegal Fishing",
    location: "Gulf of Tunis, La Marsa",
    date: "2023-04-15",
    status: "Verified",
    description: "Large vessel spotted using drift nets in protected area near Zembra Island.",
  },
  {
    id: 2,
    type: "Pollution",
    location: "Hammamet Beach, Nabeul",
    date: "2023-04-12",
    status: "Under Investigation",
    description: "Oil spill affecting approximately 500m of coastline near tourist resorts.",
  },
  {
    id: 3,
    type: "Trapped Animal",
    location: "Tabarka Coral Reefs, Jendouba",
    date: "2023-04-10",
    status: "Resolved",
    description: "Sea turtle entangled in abandoned fishing net. Rescue team dispatched.",
  },
  {
    id: 4,
    type: "Illegal Fishing",
    location: "Kerkennah Islands, Sfax",
    date: "2023-04-08",
    status: "Verified",
    description: "Multiple boats using prohibited equipment in marine sanctuary near the archipelago.",
  },
  {
    id: 5,
    type: "Habitat Destruction",
    location: "Djerba Mangroves, Medenine",
    date: "2023-04-05",
    status: "Under Investigation",
    description: "Unauthorized clearing of protected coastal vegetation affecting local ecosystem.",
  },
]

export default function AlertsPage() {
  const [filter, setFilter] = useState("all")

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
              <SelectItem value="trapped animal">Trapped Animal</SelectItem>
              <SelectItem value="habitat destruction">Habitat Destruction</SelectItem>
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
            <CardContent className="p-6">
              <div className="aspect-video bg-muted rounded-md flex flex-col items-center justify-center">
                <p className="text-muted-foreground">Map of Tunisia showing alert locations</p>
                <p className="text-xs text-muted-foreground mt-2">
                  (Interactive map would display pins for each alert location along Tunisia's coastline)
                </p>
              </div>
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

