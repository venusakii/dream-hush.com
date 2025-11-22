import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    title: "Premium Audio",
    description: "High-fidelity speakers deliver crystal-clear, immersive soundscapes",
    icon: "🎵",
  },
  {
    title: "All-Night Power",
    description: "Runs continuously throughout the night without interruption",
    icon: "🔋",
  },
  {
    title: "Memory Function",
    description: "Remembers your favorite settings for effortless nightly use",
    icon: "💾",
  },
  {
    title: "Child-Safe Design",
    description: "Soft LED display and simple controls suitable for nurseries",
    icon: "👶",
  },
]

export function Features() {
  return (
    <section className="py-32 bg-twilight text-cloud">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-balance">Designed for your routine</h2>
          <p className="text-xl text-mist max-w-2xl mx-auto text-pretty">
            Every feature is thoughtfully crafted to integrate seamlessly into your bedtime ritual
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-midnight/50 border-sage/20 hover:border-sage/40 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-serif text-2xl text-cloud mb-3">{feature.title}</h3>
                <p className="text-mist">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
