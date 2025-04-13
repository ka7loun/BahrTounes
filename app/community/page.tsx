"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Calendar, MessageSquare, ThumbsUp, Trophy, Users } from "lucide-react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data for community members
const topContributors = [
  {
    id: 1,
    name: "Ahmed Kahloun",
    avatar: "/placeholder.svg?height=40&width=40",
    reports: 24,
    badge: "Marine Guardian",
    joined: "Jan 2023",
  },
  {
    id: 2,
    name: "Salim Hamouda",
    avatar: "/placeholder.svg?height=40&width=40",
    reports: 18,
    badge: "Coastal Protector",
    joined: "Mar 2023",
  },
  {
    id: 3,
    name: "Mehdi Bouazizi",
    avatar: "/placeholder.svg?height=40&width=40",
    reports: 15,
    badge: "Ocean Advocate",
    joined: "Feb 2023",
  },
  {
    id: 4,
    name: "Leila Sfar",
    avatar: "/placeholder.svg?height=40&width=40",
    reports: 12,
    badge: "Sea Guardian",
    joined: "Apr 2023",
  },
  {
    id: 5,
    name: "Karim Gharbi",
    avatar: "/placeholder.svg?height=40&width=40",
    reports: 10,
    badge: "Reef Defender",
    joined: "May 2023",
  },
]

// Sample data for success stories
const successStories = [
  {
    id: 1,
    title: "Illegal Fishing Operation Shut Down in Gulf of Tunis",
    description:
      "Thanks to multiple community reports, authorities were able to identify and stop a large-scale illegal fishing operation near Zembra and Zembretta National Park.",
    date: "March 15, 2023",
    image: "/images/authorities-stopping-illegal-fishing.png",
    likes: 45,
    comments: 12,
  },
  {
    id: 2,
    title: "Hammamet Beach Cleanup Removes 500kg of Waste",
    description:
      "Community members organized a beach cleanup event after reports of pollution, removing over 500kg of plastic and fishing gear from the popular tourist coastline.",
    date: "April 22, 2023",
    image: "/images/hammamet-beach-cleanup.png",
    likes: 38,
    comments: 8,
  },
  {
    id: 3,
    title: "Endangered Loggerhead Turtle Rescue in Monastir",
    description:
      "A quick report from a community member led to the rescue of an endangered loggerhead sea turtle trapped in abandoned fishing nets near Kuriat Islands.",
    date: "May 10, 2023",
    image: "/images/loggerhead-turtle-rescue.png",
    likes: 62,
    comments: 15,
  },
]

export default function CommunityPage() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    experience: "",
    interests: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, experience: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSuccess(false)
        setIsRegistrationOpen(false)
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          city: "",
          experience: "",
          interests: "",
        })
      }, 2000)
    }, 1500)
  }

  return (
    <div className="container py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Our Community</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join a network of dedicated individuals working together to protect our oceans. Every report and action makes
          a difference.
        </p>
      </div>

      <Tabs defaultValue="contributors" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="contributors">Top Contributors</TabsTrigger>
          <TabsTrigger value="success">Success Stories</TabsTrigger>
        </TabsList>

        <TabsContent value="contributors" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  Leaderboard
                </CardTitle>
                <CardDescription>Our most active community members</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topContributors.map((contributor, index) => (
                    <div key={contributor.id} className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground font-medium">
                        {index + 1}
                      </div>
                      <Avatar>
                        <AvatarImage src={contributor.avatar} alt={contributor.name} />
                        <AvatarFallback>{contributor.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium">{contributor.name}</div>
                        <div className="text-sm text-muted-foreground">Joined {contributor.joined}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{contributor.reports} reports</div>
                        <Badge variant="outline" className="text-xs">
                          {contributor.badge}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-500" />
                  Achievements
                </CardTitle>
                <CardDescription>Badges and recognition for your contributions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border rounded-md text-center">
                    <div className="h-12 flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-500"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <p className="font-medium">First Report</p>
                    <p className="text-xs text-muted-foreground">Submit your first report</p>
                  </div>
                  <div className="p-4 border rounded-md text-center">
                    <div className="h-12 flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <p className="font-medium">Verified Report</p>
                    <p className="text-xs text-muted-foreground">Get a report verified</p>
                  </div>
                  <div className="p-4 border rounded-md text-center">
                    <div className="h-12 flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-purple-500"
                      >
                        <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                        <path d="M12 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                        <path d="M20 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
                        <path d="M4 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                        <path d="M16 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                        <path d="M8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                        <path d="M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                        <path d="M16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                      </svg>
                    </div>
                    <p className="font-medium">Community Builder</p>
                    <p className="text-xs text-muted-foreground">Invite 5 new members</p>
                  </div>
                  <div className="p-4 border rounded-md text-center">
                    <div className="h-12 flex items-center justify-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-yellow-500"
                      >
                        <path d="M12 2v8" />
                        <path d="m4.93 10.93 1.41 1.41" />
                        <path d="M2 18h2" />
                        <path d="M20 18h2" />
                        <path d="m19.07 10.93-1.41 1.41" />
                        <path d="M22 22H2" />
                        <path d="m8 22 4-10 4 10" />
                      </svg>
                    </div>
                    <p className="font-medium">Marine Guardian</p>
                    <p className="text-xs text-muted-foreground">Submit 10+ reports</p>
                  </div>
                </div>

                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    <Users className="mr-2 h-4 w-4" />
                    View All Achievements
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="success" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {successStories.map((story) => (
              <Card key={story.id}>
                <div className="relative h-[200px] w-full">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Calendar className="h-4 w-4" />
                    {story.date}
                  </div>
                  <CardTitle className="text-lg">{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{story.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{story.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{story.comments}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Have a success story to share? Let us know how your reports made a difference!
            </p>
            <Button>Share Your Story</Button>
          </div>
        </TabsContent>
      </Tabs>

      <section className="mt-16 bg-blue-50 dark:bg-blue-950 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Join Our Next Event</h2>
          <p className="text-muted-foreground">Connect with fellow ocean protectors and make a direct impact</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <h3 className="font-medium">Beach Cleanup & Conservation Workshop</h3>
            </div>
            <p>
              Join us for a day of action and learning! We'll start with a beach cleanup followed by a workshop on
              marine conservation techniques and identification of illegal fishing activities.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-background rounded-md">
                <p className="font-medium">Date & Time</p>
                <p className="text-muted-foreground">June 5, 2023 • 9:00 AM</p>
              </div>
              <div className="p-3 bg-background rounded-md">
                <p className="font-medium">Location</p>
                <p className="text-muted-foreground">Sidi Bou Said Beach, Tunis</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button onClick={() => setIsRegistrationOpen(true)}>Register Now</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="relative h-[250px] rounded-lg overflow-hidden">
            <Image
              src="/images/beach-cleanup-sidi-bou-said.png"
              alt="Volunteers participating in a beach cleanup event at Sidi Bou Said Beach"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Registration Dialog */}
      <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Register for Beach Cleanup Event</DialogTitle>
            <DialogDescription>
              Fill out the form below to register for the beach cleanup and conservation workshop on June 5, 2023.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Enter your city"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="experience">Conservation Experience</Label>
                <Select value={formData.experience} onValueChange={handleSelectChange}>
                  <SelectTrigger id="experience">
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No prior experience</SelectItem>
                    <SelectItem value="beginner">Beginner (1-2 events)</SelectItem>
                    <SelectItem value="intermediate">Intermediate (3-5 events)</SelectItem>
                    <SelectItem value="experienced">Experienced (6+ events)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="interests">Areas of Interest</Label>
                <Textarea
                  id="interests"
                  name="interests"
                  value={formData.interests}
                  onChange={handleInputChange}
                  placeholder="Tell us what aspects of marine conservation interest you most"
                  className="min-h-[80px]"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsRegistrationOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Register"}
              </Button>
            </DialogFooter>
          </form>
          {isSuccess && (
            <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-md text-center">
              Registration successful! We'll contact you with more details soon.
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
