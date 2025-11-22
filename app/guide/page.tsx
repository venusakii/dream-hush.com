import { Header } from "@/components/header"
import { SleepGuide } from "@/components/sleep-guide"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Sleep Guide - Dream Hush",
  description: "Download our comprehensive guide to better sleep with expert tips and techniques.",
}

export default function GuidePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <SleepGuide />
      </div>
      <Footer />
    </main>
  )
}
