import { Header } from "@/components/header"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About Us - Dream Hush",
  description: "Learn about Dream Hush's journey in creating premium sleep sound machines since 2015.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  )
}
