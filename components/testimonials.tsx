import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Dream Hush completely transformed my sleep. I fall asleep faster and wake up feeling truly rested.",
    author: "Rachel Anderson",
    role: "New Mother",
  },
  {
    quote:
      "As someone who travels constantly, the Hush Travel is my most essential item. Hotel rooms finally feel like home.",
    author: "Marcus Thompson",
    role: "Business Consultant",
  },
  {
    quote:
      "I've tried every sleep aid imaginable. This is the only thing that actually works. The sound quality is incredible.",
    author: "Dr. Lisa Patel",
    role: "Sleep Researcher",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-cloud text-midnight">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-balance">Loved by dreamers</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-sage/20">
              <CardContent className="p-8">
                <p className="text-lg text-charcoal leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-serif text-xl text-midnight">{testimonial.author}</div>
                  <div className="text-sm text-charcoal">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
