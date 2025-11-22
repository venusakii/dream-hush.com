import { Header } from "@/components/header"
import { ScienceOfSound } from "@/components/science-of-sound"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Science of Sound - Dream Hush",
  description: "Discover the engineering and technology behind our premium sound masking solutions.",
}

export default function SciencePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ScienceOfSound />
      </div>
      <Footer />
    </main>
  )
}
