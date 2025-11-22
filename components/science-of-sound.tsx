export function ScienceOfSound() {
  return (
    <section id="science" className="py-32 bg-cloud text-midnight">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <img
              src="/sound-wave-visualization-with-calming-colors.jpg"
              alt="Sound engineering"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-serif text-5xl md:text-6xl mb-6 text-balance">
              Engineered for <span className="italic">serenity</span>
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Our proprietary Sound Synthesis Engine analyzes your environment in real-time, adapting white noise, pink
              noise, and brown noise to create the optimal acoustic masking.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-2 bg-sage rounded-full flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-2xl mb-2">Adaptive Volume</h3>
                  <p className="text-charcoal">Automatically adjusts to ambient noise levels throughout the night</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 bg-sage rounded-full flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-2xl mb-2">Natural Soundscapes</h3>
                  <p className="text-charcoal">Recorded in pristine environments, from rain forests to ocean shores</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 bg-sage rounded-full flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-2xl mb-2">Sleep Timer</h3>
                  <p className="text-charcoal">Gradually fades as you drift into deeper sleep stages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
