"use client"

import { MediaReveal } from "@/components/media-reveal"
import { Card } from "@/components/ui/card"
import Link from "next/link"

interface Event {
  id: number
  title: string
  imageSrc: string
}

const events: Event[] = [
  {
    id: 1,
    title: "Event 1",
    imageSrc: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Event 2",
    imageSrc: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Event 3",
    imageSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Event 4",
    imageSrc: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Event 5",
    imageSrc: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Event 6",
    imageSrc: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    title: "Event 7",
    imageSrc: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
  },
]

export function EventsGallery() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <MediaReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Our Events</h2>
        </MediaReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <MediaReveal key={event.id} delay={index * 100}>
              <Link href={`/events/${event.id}`}>
                <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-[4/3]">
                  <img
                    src={event.imageSrc}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-md bg-white/30">
                    <h3 className="text-white text-2xl md:text-3xl font-bold text-center px-4 drop-shadow-lg">
                      {event.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </MediaReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
