import { Header } from "@/components/header"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Reviews - Dream Hush",
  description: "Read what our customers say about their sleep transformation with Dream Hush.",
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Testimonials />
      </div>
      <Footer />
    </main>
  )
}
