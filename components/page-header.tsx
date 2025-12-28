import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function PageHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-2">
          <Link href="/">
            <img 
              src="/sur_n_swag_logo.png" 
              alt="Sur N Swag Logo" 
              className="h-12 md:h-16 lg:h-20 w-auto cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/about">
            <Button
              variant="outline"
              className="bg-background/90 backdrop-blur-sm text-foreground border-foreground/20 hover:bg-background shadow-lg"
            >
              About
            </Button>
          </Link>
          <Button
            variant="outline"
            className="bg-background/90 backdrop-blur-sm text-foreground border-foreground/20 hover:bg-background shadow-lg"
          >
            Contact
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

