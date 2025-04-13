import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, BookOpen, Fish, ShieldAlert } from "lucide-react"
import Image from "next/image"

export default function EducationPage() {
  return (
    <div className="container py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Marine Conservation Education</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Learn how to identify illegal fishing activities, report safely, and understand why marine conservation is
          crucial for our planet.
        </p>
      </div>

      <Tabs defaultValue="illegal-fishing" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="illegal-fishing">Illegal Fishing</TabsTrigger>
          <TabsTrigger value="safety">Safety Guidelines</TabsTrigger>
          <TabsTrigger value="importance">Why It Matters</TabsTrigger>
        </TabsList>

        <TabsContent value="illegal-fishing" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-red-500" />
                How to Spot Illegal Fishing
              </CardTitle>
              <CardDescription>Learn to identify signs of illegal fishing activities in your area</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Common Signs to Watch For:</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Fishing in protected or restricted areas (marked by buoys or signs)</li>
                    <li>Use of prohibited equipment like drift nets or explosives</li>
                    <li>Fishing during seasonal bans or closed periods</li>
                    <li>Harvesting undersized fish or protected species</li>
                    <li>Vessels without proper identification or with covered markings</li>
                    <li>Fishing without visible permits or licenses</li>
                  </ul>
                </div>
                <div className="relative h-[200px] rounded-md overflow-hidden">
                  <Image
                    src="/images/illegal-drift-nets.jpeg"
                    alt="Fishing boats in the Gulf of Tunis using illegal drift nets"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Illegal Equipment:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                        className="text-red-500"
                      >
                        <path d="M21.3 8.7c-1-1.5-2.5-3-4.3-4.1-1.9-1.2-3.8-1.6-5-1.6-1.2 0-3.1.4-5 1.6-1.8 1.1-3.3 2.6-4.3 4.1-1 1.5-1.2 2.9-.7 3.9.5 1 1.7 1.4 3.2 1.4 1.8 0 4.1-.6 6.8-2.4 2.7 1.8 5 2.4 6.8 2.4 1.5 0 2.7-.4 3.2-1.4.5-1 .3-2.4-.7-3.9z" />
                        <path d="M3.2 15.4c-1.3 1.5-2 3.5-2 5.6 0 1 .8 2 2 2 1.7 0 3-1.3 3-3" />
                        <path d="M20.8 15.4c1.3 1.5 2 3.5 2 5.6 0 1-.8 2-2 2-1.7 0-3-1.3-3-3" />
                      </svg>
                    </div>
                    <p className="text-sm">Drift Nets</p>
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
                        className="text-red-500"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    </div>
                    <p className="text-sm">Explosives</p>
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
                        className="text-red-500"
                      >
                        <path d="M2 12h5" />
                        <path d="M17 12h5" />
                        <path d="M9 6v12" />
                        <path d="M15 6v12" />
                      </svg>
                    </div>
                    <p className="text-sm">Electric Fishing</p>
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
                        className="text-red-500"
                      >
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                        <path d="M12 9v4" />
                        <path d="M12 17h.01" />
                      </svg>
                    </div>
                    <p className="text-sm">Poison/Chemicals</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <h3 className="text-lg font-medium mb-3">Learn More:</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://piersight.space/blog/illegal-iuu-fishing-what-is-it-and-how-to-detect-it"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Illegal (IUU) Fishing: What Is It and How to Detect It
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://europe.oceana.org/press-releases/oceana-discovers-italian-fishermen-using-illegal-driftnets-tunisian/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Oceana Discovers Italian Fishermen Using Illegal Driftnets in Tunisian Waters
                    </a>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="safety" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                Safety Guidelines for Reporting
              </CardTitle>
              <CardDescription>How to safely document and report illegal activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Safety First:</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Never confront individuals engaged in illegal activities</li>
                    <li>Maintain a safe distance when documenting</li>
                    <li>If possible, report from land rather than approaching by water</li>
                    <li>Always prioritize your personal safety over documentation</li>
                    <li>Report in groups when possible, never alone in remote areas</li>
                    <li>Share your location with someone trusted before investigating</li>
                  </ul>
                </div>
                <div className="relative h-[200px] rounded-md overflow-hidden">
                  <Image
                    src="/images/documenting-illegal-fishing.jpeg"
                    alt="Person safely documenting illegal fishing from the shore at Hammamet Beach"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Documentation Tips:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium mb-2">Photos & Videos</h4>
                    <ul className="text-sm space-y-1 list-disc pl-4">
                      <li>Capture vessel identification when possible</li>
                      <li>Document equipment being used</li>
                      <li>Include landmarks to establish location</li>
                      <li>Use zoom to maintain distance</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium mb-2">Notes</h4>
                    <ul className="text-sm space-y-1 list-disc pl-4">
                      <li>Record date, time, and location</li>
                      <li>Describe activities in detail</li>
                      <li>Note number of people involved</li>
                      <li>Document weather conditions</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium mb-2">Reporting</h4>
                    <ul className="text-sm space-y-1 list-disc pl-4">
                      <li>Use this platform for non-emergencies</li>
                      <li>Contact coast guard for immediate threats</li>
                      <li>Report anonymously if concerned</li>
                      <li>Follow up if no action is taken</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="importance" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-500" />
                Why Marine Protection Matters
              </CardTitle>
              <CardDescription>Understanding the importance of ocean conservation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Ecological Importance:</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Oceans produce over 50% of the world's oxygen</li>
                    <li>Marine ecosystems support 80% of the planet's biodiversity</li>
                    <li>Healthy oceans regulate our climate and weather patterns</li>
                    <li>Coral reefs protect coastlines from storms and erosion</li>
                    <li>Marine food webs maintain ecological balance</li>
                  </ul>
                </div>
                <div className="relative h-[200px] rounded-md overflow-hidden">
                  <Image
                    src="/images/tabarka-coral-reef.png"
                    alt="Healthy coral reef ecosystem near Tabarka with colorful fish and marine life"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Impact of Illegal Fishing:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium mb-2">Environmental</h4>
                    <ul className="text-sm space-y-1 list-disc pl-4">
                      <li>Depletes fish populations beyond recovery</li>
                      <li>Damages sensitive habitats like coral reefs</li>
                      <li>Disrupts marine food chains</li>
                      <li>Leads to bycatch of endangered species</li>
                      <li>Reduces ocean biodiversity</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium mb-2">Socioeconomic</h4>
                    <ul className="text-sm space-y-1 list-disc pl-4">
                      <li>Threatens food security for coastal communities</li>
                      <li>Undermines legal fishing industries</li>
                      <li>Costs global economy billions annually</li>
                      <li>Reduces tourism potential in affected areas</li>
                      <li>Often linked to other criminal activities</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md">
                <h3 className="text-lg font-medium mb-2 flex items-center gap-2">
                  <Fish className="h-5 w-5 text-blue-500" />
                  Your Impact
                </h3>
                <p className="text-sm">
                  By reporting illegal fishing and marine pollution, you directly contribute to conservation efforts.
                  Each report helps authorities enforce regulations, protect vulnerable species, and preserve marine
                  ecosystems for future generations. Together, we can make a difference.
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-md mt-4">
                <h3 className="text-lg font-medium mb-2">Tunisia's Marine Heritage</h3>
                <p className="text-sm">
                  Tunisia's 1,300 km coastline is home to rich biodiversity including Posidonia seagrass meadows,
                  loggerhead turtles, and Mediterranean monk seals. The Gulf of Gabès alone hosts over 1,000 marine
                  species, while the Galite Archipelago and Zembra-Zembretta are vital protected areas. This
                  biodiversity supports Tunisia's fishing industry, which employs over 50,000 people and contributes
                  significantly to the economy.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t">
                <h3 className="text-lg font-medium mb-3">Learn More:</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://europe.oceana.org/blog/why-marine-protected-areas-matter/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Why Marine Protected Areas Matter - Oceana
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ejfoundation.org/news-media/kiss-trawling-in-tunisia-is-destroying-livelihoods-culture-and-important-marine-ecosystems-new-report"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Trawling in Tunisia is Destroying Livelihoods, Culture and Marine Ecosystems
                    </a>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
