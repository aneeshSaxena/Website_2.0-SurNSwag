"use client"

import { ImageCarousel } from "@/components/image-carousel"
import { MediaReveal } from "@/components/media-reveal"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface EventPageClientProps {
  id: string
  event: { title: string; images: string[] } | null
}

export function EventPageClient({ id, event }: EventPageClientProps) {
  if (!event) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Event Not Found</h1>
          <Link href="/">
            <Button>Go Back Home</Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
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

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <MediaReveal>
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </MediaReveal>

        <MediaReveal delay={100}>
          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
            {event.title}
          </h1>
        </MediaReveal>

        <MediaReveal delay={200}>
          <ImageCarousel images={event.images} />
        </MediaReveal>
      </div>
    </main>
  )
}
