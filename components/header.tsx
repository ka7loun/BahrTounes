"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { Fish, Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Fish className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-bold">BahrTounes</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/report" className="text-sm font-medium transition-colors hover:text-primary">
            Report
          </Link>
          <Link href="/alerts" className="text-sm font-medium transition-colors hover:text-primary">
            Alerts
          </Link>
          <Link href="/education" className="text-sm font-medium transition-colors hover:text-primary">
            Education
          </Link>
          <Link href="/community" className="text-sm font-medium transition-colors hover:text-primary">
            Community
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="hover:text-primary" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="/report" className="hover:text-primary" onClick={() => setIsOpen(false)}>
                  Report
                </Link>
                <Link href="/alerts" className="hover:text-primary" onClick={() => setIsOpen(false)}>
                  Alerts
                </Link>
                <Link href="/education" className="hover:text-primary" onClick={() => setIsOpen(false)}>
                  Education
                </Link>
                <Link href="/community" className="hover:text-primary" onClick={() => setIsOpen(false)}>
                  Community
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
