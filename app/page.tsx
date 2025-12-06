import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="m-0 p-0">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
