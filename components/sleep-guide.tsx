import { Button } from "@/components/ui/button"

export function SleepGuide() {
  return (
    <section id="guide" className="py-32 bg-midnight text-cloud">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-5xl md:text-6xl mb-6 text-balance">Your guide to better sleep</h2>
        <p className="text-xl text-mist mb-12 text-pretty">
          Download our free comprehensive guide featuring expert tips on sleep hygiene, optimal sound profiles for
          different sleep stages, and how to create the perfect bedroom environment.
        </p>
        

        <div className="mt-20 grid md:grid-cols-3 gap-12 text-left">
          <div>
            <h3 className="font-serif text-2xl text-sage mb-4">Sleep Science</h3>
            <p className="text-mist">Understand the stages of sleep and how sound affects each phase</p>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-sage mb-4">Sound Selection</h3>
            <p className="text-mist">Learn which soundscapes work best for your sleep style</p>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-sage mb-4">Setup Tips</h3>
            <p className="text-mist">Optimize your device placement and volume for maximum benefit</p>
          </div>
        </div>
      </div>
    </section>
  )
}
