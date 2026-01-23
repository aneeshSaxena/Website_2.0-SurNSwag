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
                  Sur N Swag Productions is a Dallas-based cultural and entertainment production house founded by Kirti Srivastava and Aneesh Saxena, focused on creating high-quality, emotionally rich musical experiences for the Indian and South Asian community.
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
                  Sur N Swag hosts a diverse portfolio of events including karaoke nights with strong repeat attendance, accredited ghazal singers and classical evenings, festival specials such as Diwali, Holi, Valentine's and New Year's, as well as corporate and private events and talent showcases.
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
                  Sur N Swag's vision is to grow into DFW's most trusted premium Indian music production brand, known for thoughtful curation, community connection, and experiences that audiences remember long after the music ends. We focus on creating a comprehensive entertainment experience—where music, hosting, storytelling, stage flow, sound, lighting, and audience engagement come together as one cohesive journey.
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
