import { HeroSection } from "@/components/hero-section"
import { EventsGallery } from "@/components/events-gallery"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="m-0 p-0">
      <HeroSection />
      <EventsGallery />
      <Footer />
    </main>
  )
}
