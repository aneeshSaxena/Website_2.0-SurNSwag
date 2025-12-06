"use client"

import { Card } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { MediaReveal } from "@/components/media-reveal"

export function AboutSection() {
  return (
    <>
      {/* About Sur 'n Swag */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">About Sur 'n Swag</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Sur 'n Swag is a family owned business of talented individuals that love to sing, dance and entertain! After realizing the lack of quality bollywood entertainers and event organizers in the DFW area, we decided to fill that void by creating our own group of talent! Now, we are proud to offer our comprehensive and theme based entertainment with a 100% satisfaction guarantee!
                </p>
              </div>
            </ScrollReveal>
            <MediaReveal>
              <Card className="overflow-hidden shadow-2xl border-2">
                <img
                  src="/our_story.png"
                  alt="Our Story"
                  className="w-full h-auto object-cover"
                />
              </Card>
            </MediaReveal>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 md:py-24 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <MediaReveal delay={100}>
              <Card className="overflow-hidden shadow-2xl border-2">
                <img
                  src="/our_services.png"
                  alt="Our Services"
                  className="w-full h-auto object-cover"
                />
              </Card>
            </MediaReveal>
            <ScrollReveal delay={100}>
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Our Services</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We offer a wide variety of event services. Whether you need a live music entertainment or karaoke setup for full-scale bollywood events or small gatherings, we've got you covered. We also offer dance choreography, full scale entertainment planning, and customized playlists to ensure that your experience is personalized to what fits you best!
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal delay={200}>
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Sur 'n Swag, we provide the highest quality Bollywood entertainment experience possible. We want to bring people together through the power of music and dance, creating memories that will last a lifetime. With our celebrated artists and event lineups, we strive to make every event unforgettable!
                </p>
              </div>
            </ScrollReveal>
            <MediaReveal delay={200}>
              <Card className="overflow-hidden shadow-2xl border-2">
                <img
                  src="/our_mission.png"
                  alt="Our Mission"
                  className="w-full h-auto object-cover"
                />
              </Card>
            </MediaReveal>
          </div>
        </div>
      </section>
    </>
  )
}
