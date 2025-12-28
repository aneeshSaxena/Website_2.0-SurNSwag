"use client"

import { MediaReveal } from "@/components/media-reveal"
import Link from "next/link"

export function LatestEventSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <MediaReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Latest Event</h2>
        </MediaReveal>

        <MediaReveal delay={100}>
          <Link href="/events/7">
            <div className="group relative overflow-hidden rounded-xl shadow-2xl cursor-pointer max-w-4xl mx-auto aspect-[21/9]">
              <img
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1400&h=600&fit=crop"
                alt="Event 7"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-md bg-white/30">
                <div className="text-center px-6">
                  <h3 className="text-white text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">
                    Event 7
                  </h3>
                  <p className="text-white text-lg md:text-xl drop-shadow-lg">
                    Click to view gallery
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </MediaReveal>
      </div>
    </section>
  )
}
