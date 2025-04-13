import { Fish } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <Fish className="h-5 w-5 text-blue-600" />
          <span className="text-sm font-medium">BahrTounes</span>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} OceanGuard. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
