"use client"

import { Instagram, Youtube, Music, Facebook } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8 md:py-12 px-4">
      <ScrollReveal delay={300}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex justify-center gap-6 flex-wrap mb-4">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="TikTok"
              >
                <Music className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6 text-center">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Sur 'n Swag. All rights reserved.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  )
}
