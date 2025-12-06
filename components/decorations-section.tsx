"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function DecorationsSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/30">
      <ScrollReveal delay={100}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <Card className="overflow-hidden shadow-2xl border-2">
              <img
                src="/elegant-event-decorations-with-vibrant-fabrics-col.jpg"
                alt="Event decorations"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </Card>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Transform Your Space</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">Decorations That Captivate</h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              From vibrant cultural draping to modern ambient lighting, we create immersive environments that reflect
              your vision and wow your guests.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">Custom themes tailored to your event</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">Professional setup and teardown</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-foreground">High-quality materials and attention to detail</span>
              </li>
            </ul>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  )
}
