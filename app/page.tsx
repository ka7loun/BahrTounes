import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Fish, Shield } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 dark:bg-blue-900 px-3 py-1 text-sm text-blue-800 dark:text-blue-100">
                  Marine Conservation Initiative
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Protect Tunisia's Mediterranean Treasures
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Report illegal fishing, save marine life, and help preserve Tunisia's beautiful coastlines. Join our
                  community of ocean protectors.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/report">
                      Report Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/education">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="/images/tunisia-coastline.png"
                  alt="Aerial view of Tunisia's coastline showing the beautiful blue Mediterranean waters meeting the shore at Sidi Bou Said"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're dedicated to protecting our oceans through community action and awareness. By reporting illegal
                  activities, you directly contribute to marine conservation efforts.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <Shield className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                </div>
                <h3 className="text-xl font-bold">Report Illegal Activities</h3>
                <p className="text-muted-foreground">
                  Document and report illegal fishing and other harmful activities affecting our marine ecosystems.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                  <Fish className="h-6 w-6 text-green-700 dark:text-green-300" />
                </div>
                <h3 className="text-xl font-bold">Protect Marine Life</h3>
                <p className="text-muted-foreground">
                  Help safeguard endangered species and preserve biodiversity in our oceans.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4 rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
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
                    className="h-6 w-6 text-teal-700 dark:text-teal-300"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Educate & Raise Awareness</h3>
                <p className="text-muted-foreground">
                  Spread knowledge about marine conservation and empower others to take action for our oceans.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Make a Difference?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Your reports help authorities take action against illegal fishing and marine pollution in Tunisian
                  waters.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/report">Report an Incident</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/alerts">View Recent Alerts</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
