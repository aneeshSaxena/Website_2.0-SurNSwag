import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { FAQSection } from "@/components/faq-section"
import { PageHeader } from "@/components/page-header"

export default function AboutPage() {
  return (
    <main className="m-0 p-0">
      <PageHeader />
      <AboutSection />
      <ServicesSection />
      <FAQSection />
    </main>
  )
}

