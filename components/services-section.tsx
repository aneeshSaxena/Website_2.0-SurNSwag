"use client"

import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { MediaReveal } from "@/components/media-reveal"

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Watch us in action!</h2>
          </div>
        </ScrollReveal>

        {/* Event MC and Organizing */}
        <div className="mb-12 md:mb-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal>
              <div>
                <h3 className="text-2xl md:text-4xl font-bold mb-6 text-balance">Event MC and Organizing!</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We manage end-to-end production, from artist curation and rehearsals to promotion, ticketing, and flawless on-ground execution, delivering a seamless, professional experience for venues, sponsors, artists, and audiences alike. Our events consistently attract a loyal, high-engagement audience that stays through full shows, driven by nostalgia, storytelling, and quality performances.
                </p>
              </div>
            </ScrollReveal>
            <MediaReveal>
              <Card className="overflow-hidden shadow-2xl border-2">
                <img
                  src="/event_organizing.png"
                  alt="Event MC and Organizing"
                  className="w-full h-auto object-cover"
                />
              </Card>
            </MediaReveal>
          </div>
        </div>

        {/* Live music entertainment */}
        <div className="mb-12 md:mb-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <MediaReveal>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-2">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/GbfFzueIC3w?si=4DGvvvgveha1cPap"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </MediaReveal>
            <ScrollReveal>
              <div>
                <h3 className="text-2xl md:text-4xl font-bold mb-6 text-balance">Live music entertainment!</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our flagship property, Sur Mera Swag Tera, is a premium Bollywood and Ghazal musical evening designed as a curated, narrative-driven show rather than a collection of random performances. The videos here showcase our past events including our previous sold-out Sur Mera Swag Tera event in July 2025, along with production services we've provided in Dallas, Phoenix AZ, Nashville TN, and Denver CO.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Ignite Your Event with Rhythm */}
        <div className="mb-12 md:mb-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal>
              <div>
                <h3 className="text-2xl md:text-4xl font-bold mb-6 text-balance">Ignite Your Event with Rhythm!</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A core pillar of our work is highlighting under-appreciated and emerging talent by giving artists a professional stage, thoughtful curation, and an engaged audience that truly listens and connects. We bring together music, hosting, storytelling, stage flow, sound, lighting, and audience engagement as one cohesive journey.
                </p>
              </div>
            </ScrollReveal>
            <MediaReveal>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-2">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://player.vimeo.com/video/1028279747?h=817c275f38"
                  title="Dance Choreography"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </MediaReveal>
          </div>
        </div>

        {/* Enhance your Corporate Events */}
        <div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <MediaReveal>
              <Card className="overflow-hidden shadow-2xl border-2">
                <img
                  src="/enhance_corporate.png"
                  alt="Corporate Events"
                  className="w-full h-auto object-cover"
                />
              </Card>
            </MediaReveal>
            <ScrollReveal>
              <div>
                <h3 className="text-2xl md:text-4xl font-bold mb-6 text-balance">Enhance your Corporate Events!</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We actively seek long-term, win-win partnerships with venues and sponsors through flexible collaboration models that enhance brand value, drive footfall and bar or food revenue, and establish venues as cultural destinations. We build relationships with venues and vendors from around Dallas who are interested in showcasing their services and brands to more than 200 people at our events who follow and support our partners with the Sur N Swag trust!
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

