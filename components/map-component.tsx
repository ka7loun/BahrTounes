"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import type { Alert } from "@/types/alert"
import { Card, CardContent } from "@/components/ui/card"
import Script from "next/script"

interface MapComponentProps {
  alerts: Alert[]
  selectedAlert: number | null
  setSelectedAlert: (id: number | null) => void
}

export default function MapComponent({ alerts, selectedAlert, setSelectedAlert }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [leafletLoaded, setLeafletLoaded] = useState(false)
  const [mapError, setMapError] = useState<string | null>(null)
  const markersRef = useRef<any[]>([])
  const mapInstanceRef = useRef<any>(null)
  const popupRef = useRef<any>(null)

  // Initialize map after Leaflet is loaded
  useEffect(() => {
    if (!leafletLoaded || !mapRef.current) return

    try {
      // Create map centered on Tunisia
      const map = (window as any).L.map(mapRef.current, {
        zoomControl: true,
        scrollWheelZoom: true,
        dragging: true,
        maxBounds: [
          [25, 5], // Southwest coordinates
          [40, 15], // Northeast coordinates
        ],
      }).setView([34.5, 9.5], 6)

      // Add OpenStreetMap tile layer
      ;(window as any).L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
        minZoom: 5,
      }).addTo(map)

      // Store map instance
      mapInstanceRef.current = map

      // Create a popup but don't add it to the map yet
      popupRef.current = (window as any).L.popup()

      // Add markers for each alert
      const newMarkers = alerts.map((alert) => {
        // Get latitude and longitude from alert
        const lat = alert.coordinates[0]
        const lng = alert.coordinates[1]

        // Create custom icon based on alert type
        const icon = (window as any).L.divIcon({
          className: "custom-marker-icon",
          html: `<div class="w-5 h-5 rounded-full ${getAlertTypeColor(alert.type)} border-2 border-white"></div>`,
          iconSize: [20, 20],
          iconAnchor: [10, 10],
        })

        // Create marker
        const marker = (window as any).L.marker([lat, lng], { icon }).addTo(map)

        // Create popup content
        const popupContent = `
          <div class="p-3">
            <div class="flex justify-between items-start mb-1">
              <h4 class="font-medium text-sm">${alert.type}</h4>
              <span class="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                alert.status === "Verified"
                  ? "bg-blue-100 text-blue-800"
                  : alert.status === "Under Investigation"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
              }">${alert.status}</span>
            </div>
            <p class="text-xs text-gray-500 mb-1">${alert.location}</p>
            <p class="text-xs mb-2">${alert.description}</p>
            <p class="text-xs text-gray-500">Reported on: ${alert.date}</p>
          </div>
        `

        // Add click listener
        marker.on("click", () => {
          setSelectedAlert(alert.id === selectedAlert ? null : alert.id)

          if (alert.id === selectedAlert) {
            map.closePopup()
          } else {
            marker.bindPopup(popupContent).openPopup()
          }
        })

        return marker
      })

      markersRef.current = newMarkers
      setMapLoaded(true)

      // Cleanup function
      return () => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove()
        }
      }
    } catch (error) {
      console.error("Error initializing map:", error)
      setMapError("Error initializing Leaflet map. Please check the console for details.")
    }
  }, [leafletLoaded, alerts, selectedAlert])

  // Handle selected alert changes
  useEffect(() => {
    if (!mapLoaded || markersRef.current.length === 0 || selectedAlert === null) return

    const alertIndex = alerts.findIndex((a) => a.id === selectedAlert)
    if (alertIndex !== -1 && markersRef.current[alertIndex]) {
      // Trigger click on the marker
      markersRef.current[alertIndex].fire("click")
    }
  }, [selectedAlert, mapLoaded, alerts])

  if (mapError) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center py-8">
            <h3 className="text-lg font-medium text-red-600 mb-2">Map Error</h3>
            <p>{mapError}</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      {/* Load Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />

      {/* Load Leaflet JS */}
      <Script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossOrigin=""
        onLoad={() => setLeafletLoaded(true)}
        onError={() => setMapError("Failed to load Leaflet library")}
      />

      <div className="w-full aspect-video rounded-md overflow-hidden border relative">
        <div ref={mapRef} id="map" className="w-full h-full" style={{ height: "100%", width: "100%" }}></div>
      </div>
    </>
  )
}

function getAlertTypeColor(type: string): string {
  switch (type.toLowerCase()) {
    case "illegal fishing":
      return "bg-red-500"
    case "pollution":
      return "bg-orange-500"
    case "trapped animal":
      return "bg-green-500"
    case "habitat destruction":
      return "bg-purple-500"
    default:
      return "bg-blue-500"
  }
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
