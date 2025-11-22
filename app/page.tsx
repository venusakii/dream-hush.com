import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ProductCollection } from "@/components/product-collection"
import { ScienceOfSound } from "@/components/science-of-sound"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { SleepGuide } from "@/components/sleep-guide"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ProductCollection />
      <ScienceOfSound />
      <Features />
      <Testimonials />
      <SleepGuide />
      <Contact />
      <Footer />
    </main>
  )
}
