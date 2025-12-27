import { Button } from "@/components/ui/button"
import { Music } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/sur_n_swag_background.png" 
          alt="Sur N Swag Background" 
          className="w-full h-full object-cover"
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
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-foreground/20 shadow-lg">
          <Music className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Premium Entertainment Services</span>
        </div>

        <div className="bg-background/85 backdrop-blur-md px-6 py-8 md:px-8 md:py-10 rounded-2xl shadow-2xl mb-6">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight text-foreground">
            Live Music, Entertainment & Events That Shine
          </h2>

          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-foreground/90">
            Bringing Rhythm and Swag to Every Celebration
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
          >
            Book an Event
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto bg-background/90 backdrop-blur-sm text-foreground border-foreground/30 hover:bg-background shadow-lg"
          >
            View Our Work
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/60 bg-background/80 backdrop-blur-sm flex items-start justify-center p-2 shadow-lg">
          <div className="w-1 h-2 bg-foreground/80 rounded-full" />
        </div>
      </div>
    </section>
  )
}
