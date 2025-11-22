"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-32 bg-cloud text-midnight">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-5xl md:text-6xl mb-6 text-balance">Let's talk about your sleep</h2>
            <p className="text-lg text-charcoal leading-relaxed mb-8">
              Have questions about which Dream Hush device is right for you? Our sleep specialists are here to help you
              find your perfect match.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl mb-2">Email Us</h3>
                <p className="text-charcoal">hello@dream-hush.com</p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Call Us</h3>
                <p className="text-charcoal">+1 (630) 669-1129</p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2">Visit Our Showroom</h3>
                <p className="text-charcoal">
                  1054 Steele Street
                  <br />
                  Elmhurst, Illinois 60126
                  <br />
                  United States
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white border-charcoal/20"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white border-charcoal/20"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Tell us about your sleep challenges..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white border-charcoal/20 min-h-[150px]"
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-sage hover:bg-sage/90 text-midnight">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
