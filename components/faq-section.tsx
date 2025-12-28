"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FAQSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <ScrollReveal delay={200}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Please reach us at{" "}
            <a href="mailto:info@surnswag.com" className="text-primary hover:underline">
              surnswag@gmail.com
            </a>{" "}
            if you cannot find an answer to your question.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border-2 rounded-xl px-6 bg-card">
            <AccordionTrigger className="text-left hover:no-underline py-5">
              <span className="font-semibold text-lg">What is Sur N Swag?</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              Sur N Swag LLC is a premium entertainment and event management company founded by Aneesh Saxena. It brings together everything and anything in entertainment under one roof — from Bollywood, Indian, and Hollywood celebrities to top-notch production teams — delivering unforgettable experiences with professionalism, creativity, and flair.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-2 rounded-xl px-6 bg-card">
            <AccordionTrigger className="text-left hover:no-underline py-5">
              <span className="font-semibold text-lg">What kind of services do we provide?</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              Sur N Swag offers end-to-end event services, including:
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Booking of celebrities (singers, dancers, actors, comedians, models, sports stars, title holders like Miss World/Miss USA, etc.)</li>
                <li>Celebrity Emcees, Anchors & Hosts</li>
                <li>World-class live acts and performances</li>
                <li>Complete production support with professional photographers, videographers, camera crews</li>
                <li>Cinematic video and photo coverage of your event</li>
                <li>Talent sourcing for commercials, endorsements, shoots, and parades</li>
                <li>Full event planning and management from concept to execution</li>
                <li>Exclusive charity gala and fundraising event curation with a strong celebrity draw</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-2 rounded-xl px-6 bg-card">
            <AccordionTrigger className="text-left hover:no-underline py-5">
              <span className="font-semibold text-lg">What kind of events do we manage?</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              Sur N Swag can manage all types of celebrations and events, such as:
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Weddings, anniversaries, birthdays, and inaugurations</li>
                <li>Festivals: Holi, Diwali, Baisakhi, Ganpati, Navaratri, Republic Day, India Day Parades, Christmas, New Year's, Valentine's, and other global festivals</li>
                <li>Corporate events, commercial shoots, and brand endorsements</li>
                <li>Charity galas and fundraising shows</li>
                <li>Any custom entertainment event requiring a touch of star power and high-end production</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-2 rounded-xl px-6 bg-card">
            <AccordionTrigger className="text-left hover:no-underline py-5">
              <span className="font-semibold text-lg">How to purchase event tickets managed by Sur N Swag?</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              For public shows and ticketed events organized by Sur N Swag, tickets can typically be purchased through:
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Official Sur N Swag website</li>
                <li>Official event pages shared on Sur N Swag's website or social media channels</li>
                <li>Trusted ticketing platforms (Eventbrite, Ticketmaster, or exclusive local ticketing partners depending on the show)</li>
                <li>Direct contact with Sur N Swag for VIP tables, group reservations, or sponsorship packages</li>
              </ul>
              <p className="mt-4">
                If you have a specific event in mind, you can always contact Sur N Swag directly to get detailed ticketing and booking information.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      </ScrollReveal>
    </section>
  )
}
