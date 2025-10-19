"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function WellhallHeroPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/luxury-resort-spa-pool-with-loungers-and-tropical-.jpg')`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
          {/* Welcome Text */}
          <div
            className={`mb-6 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <p className="text-white text-sm md:text-base font-semibold tracking-[0.2em] uppercase">Welcome to</p>
          </div>

          {/* Main Title */}
          <div
            className={`mb-4 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-2 tracking-tight"
              style={{
                fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
                letterSpacing: "-0.02em",
              }}
            >
              The Wellhall
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`mb-12 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            <p
              className="text-xl md:text-2xl text-white/90 font-light tracking-widest"
              style={{
                fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
              }}
            >
              Resort & Spa Hotel
            </p>
          </div>

          {/* Learn More Button */}
          <div
            className={`transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            <Button
              className="px-8 py-3 md:px-10 md:py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold tracking-widest uppercase text-sm md:text-base transition-all duration-300 hover:shadow-lg"
              onClick={() => {
                // Scroll to next section or navigate
                window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
              }}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1.2s" }}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-white/60 text-xs tracking-widest uppercase">Scroll</p>
            <svg className="w-5 h-5 text-white/60 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Additional Content Section (Optional) */}
      <section className="w-full py-20 md:py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-light mb-6 text-gray-900"
            style={{
              fontFamily: "'Playfair Display', 'Cormorant Garamond', serif",
            }}
          >
            Experience Luxury
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover the perfect blend of comfort, elegance, and world-class service at The Wellhall Resort & Spa Hotel.
            Immerse yourself in our serene surroundings and rejuvenate your mind, body, and soul.
          </p>
        </div>
      </section>
    </div>
  )
}
