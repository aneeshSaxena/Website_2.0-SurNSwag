import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-[#FDF0E0]">
        <img
          src="/sur_n_swag_background.png"
          alt="Sur N Swag Background"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Header Navigation */}
      <header className="absolute top-0 left-0 right-0 z-20 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <img 
                src="/sur_n_swag_logo.png" 
                alt="Sur N Swag Logo" 
                className="h-16 md:h-24 lg:h-32 w-auto drop-shadow-2xl cursor-pointer"
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


      {/* Tagline */}
      <div className="absolute bottom-20 left-0 right-0 z-10 text-center px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/90 drop-shadow-md">
          Live Music, Entertainment & Events That Shine
        </h1>
        <p className="text-base md:text-lg text-foreground/70 mt-2">
          Bringing Rhythm and Swag to Every Celebration
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/60 bg-background/80 backdrop-blur-sm flex items-start justify-center p-2 shadow-lg">
          <div className="w-1 h-2 bg-foreground/80 rounded-full" />
        </div>
      </div>
    </section>
  )
}
