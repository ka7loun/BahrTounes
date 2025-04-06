import Link from "next/link"
import { Fish } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Fish className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-medium">BahrTounes</span>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} OceanGuard. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Contact
          </Link>
          <Link href="/privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  )
}

