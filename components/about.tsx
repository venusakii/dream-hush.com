export function About() {
  return (
    <section id="about" className="py-32 bg-cloud text-midnight">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-5xl md:text-6xl mb-6 text-balance">The art of quiet</h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Since 2015, Dream Hush has been pioneering the science of sleep acoustics. We believe that quality rest
              begins with the right sonic environment.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-8">
              Our sound machines blend cutting-edge audio engineering with minimalist design, creating devices that
              don't just mask noise—they transform your bedroom into a sanctuary of calm.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-charcoal/20">
              <div>
                <div className="text-4xl font-serif text-sage mb-2">10+</div>
                <div className="text-sm text-charcoal">Years of Research</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-sage mb-2">500K+</div>
                <div className="text-sm text-charcoal">Better Nights</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-sage mb-2">50+</div>
                <div className="text-sm text-charcoal">Sound Profiles</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/elegant-modern-sleep-sound-machine-on-wooden-night.jpg"
              alt="Dream Hush device"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
