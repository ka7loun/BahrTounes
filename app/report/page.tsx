"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, MapPin, Upload } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function ReportPage() {
  const [date, setDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="container py-10 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Report an Incident</h1>
      <p className="text-muted-foreground mb-8 text-center">
        Your reports help authorities take action against illegal activities affecting our oceans. All reports are kept
        confidential.
      </p>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Incident Report Form</CardTitle>
            <CardDescription>
              Please provide as much detail as possible about the incident you observed.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Incident Type */}
            <div className="space-y-2">
              <Label htmlFor="incident-type">Type of Activity</Label>
              <Select required>
                <SelectTrigger id="incident-type">
                  <SelectValue placeholder="Select incident type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="illegal-fishing">Illegal Fishing</SelectItem>
                  <SelectItem value="pollution">Pollution</SelectItem>
                  <SelectItem value="trapped-animal">Trapped Animal</SelectItem>
                  <SelectItem value="dynamite-fishing">Dynamite Fishing</SelectItem>
                  <SelectItem value="coral-damage">Coral Damage</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date and Time */}
            <div className="space-y-2">
              <Label htmlFor="date">Date and Time</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Select date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="flex gap-2">
                <Input id="location" placeholder="Enter location or coordinates" className="flex-1" />
                <Button type="button" variant="outline" size="icon">
                  <MapPin className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Click the pin icon to use your current location (requires permission)
              </p>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Please describe what you observed in detail..."
                className="min-h-[120px]"
              />
            </div>

            {/* Photo/Video Upload */}
            <div className="space-y-2">
              <Label htmlFor="media">Upload Photo or Video (optional)</Label>
              <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center gap-2">
                <Upload className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Drag and drop files here or click to browse</p>
                <Input id="media" type="file" className="hidden" accept="image/*,video/*" />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => document.getElementById("media")?.click()}
                >
                  Select Files
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Report"}
            </Button>
          </CardFooter>
        </form>
      </Card>

      {isSuccess && (
        <div className="mt-6 p-4 bg-green-100 dark:bg-green-900 rounded-md text-green-800 dark:text-green-100 text-center">
          Thank you for your report! Your contribution helps protect Tunisia's marine treasures.
        </div>
      )}
    </div>
  )
}
