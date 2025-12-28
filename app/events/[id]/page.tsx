"use client"

import { useParams } from "next/navigation"
import { ImageCarousel } from "@/components/image-carousel"
import { MediaReveal } from "@/components/media-reveal"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const eventData = {
  "1": {
    title: "Event 1 Media",
    images: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&h=800&fit=crop",
    ],
  },
  "2": {
    title: "Event 2 Media",
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=800&fit=crop",
    ],
  },
  "3": {
    title: "Event 3 Media",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&h=800&fit=crop",
    ],
  },
  "4": {
    title: "Event 4 Media",
    images: [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop",
    ],
  },
  "5": {
    title: "Event 5 Media",
    images: [
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=800&fit=crop",
    ],
  },
  "6": {
    title: "Event 6 Media",
    images: [
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&h=800&fit=crop",
    ],
  },
  "7": {
    title: "Event 7 Media",
    images: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&h=800&fit=crop",
    ],
  },
}

export default function EventPage() {
  const params = useParams()
  const id = params.id as string
  const event = eventData[id as keyof typeof eventData]

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
