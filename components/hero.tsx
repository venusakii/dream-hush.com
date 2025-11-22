import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-twilight text-cloud">
      <div className="absolute inset-0 bg-gradient-to-b from-twilight/80 to-midnight/60 z-0" />
      <img
        src="/serene-bedroom-at-night-with-soft-ambient-lighting.jpg"
        alt="Peaceful bedroom"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="font-serif text-6xl md:text-8xl mb-6 tracking-tight text-balance">
          Embrace the
          <span className="block italic">silence</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-mist max-w-2xl mx-auto text-pretty">
          Transform your nights with precision-engineered sound machines designed to guide you into deeper, more
          restorative sleep
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-sage hover:bg-sage/90 text-midnight text-lg px-8" asChild>
            <Link href="/products">Explore Collection</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-cloud/30 text-cloud hover:bg-cloud/10 text-lg px-8 bg-transparent"
            asChild
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
