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
                  Elevate your event into a mesmerizing experience with Kirti, an artist and MC who radiates charm, sophistication, and authentic Bollywood flair. Her magnetic presence, vibrant storytelling, and seamless crowd engagement ensure your celebration flows effortlessly from start to finish. Whether you're hosting an elegant wedding, lively corporate gala, or festive gathering, Kirti transforms every occasion into a spectacular affair, leaving guests enchanted and asking for more. Book Kirti now and watch your event sparkle!
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
                  src="https://www.youtube.com/embed/GbfFzueIC3w"
                  title="Live Music Entertainment"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </MediaReveal>
            <ScrollReveal>
              <div>
                <h3 className="text-2xl md:text-4xl font-bold mb-6 text-balance">Live music entertainment!</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Elevate your event's ambiance with spectacular live music entertainment that touches the soul and electrifies the atmosphere. Our talented musicians deliver mesmerizing performances tailored perfectly for weddings, corporate events, or festive celebrations. From vibrant Bollywood hits to soothing melodies, experience the magic of live music that keeps your guests entertained, engaged, and enchanted. Book today and let the music move you!
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
                  Turn your special moments into captivating dance sequences choreographed to perfection! Our skilled choreographers craft bespoke routines, blending Bollywood energy with elegance and style. Ideal for weddings, celebrations, or corporate galas, our choreography ensures everyone—from beginners to seasoned dancers—shines confidently on stage. Book now and step into the spotlight!
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
                  Enhance your corporate events with the charisma of our talent pool! We specialize in curating experiences based on YOUR preferences and ensure to create a one-of-a-kind event.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

