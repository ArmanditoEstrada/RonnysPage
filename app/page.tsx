"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Star, MapPin, Menu, X } from "lucide-react"
import Image from "next/image"

const PawPrint = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 50 50" fill="currentColor" className={`w-12 h-12 text-yellow-400/60 ${className}`}>
    <ellipse cx="15" cy="15" rx="4" ry="6" transform="rotate(-20 15 15)" />
    <ellipse cx="26" cy="13" rx="4" ry="6" transform="rotate(-10 26 13)" />
    <ellipse cx="11" cy="24" rx="3.5" ry="5" transform="rotate(-30 11 24)" />
    <ellipse cx="30" cy="22" rx="3.5" ry="5" transform="rotate(10 30 22)" />
    <ellipse cx="20" cy="30" rx="6" ry="8" />
  </svg>
)

export default function RonnyLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    setHeroLoaded(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[data-animate-title]").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-red-700">
      <header className="fixed top-0 left-0 right-0 z-50 bg-red-950 backdrop-blur-sm border-b-2 border-yellow-400">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/ronny-logo.png"
              alt="Ronny Chihuahua Logo"
              width={70}
              height={70}
              className="drop-shadow-[0_0_20px_rgba(255,215,0,0.8)] transition-all duration-300 hover:drop-shadow-[0_0_35px_rgba(255,215,0,1)] hover:scale-110"
            />
            <Image
              src="/ronnys-logo-design.png"
              alt="Ronny's Logo"
              width={160}
              height={50}
              className="drop-shadow-[0_0_20px_rgba(239,68,68,0.8)] transition-all duration-300 hover:drop-shadow-[0_0_40px_rgba(239,68,68,1)] hover:scale-110"
              style={{ background: "transparent" }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <a
              href="#inicio"
              className="text-yellow-400 hover:text-yellow-300 font-black transition-all tracking-tight text-lg"
              style={{
                fontFamily: "Impact, 'Arial Black', sans-serif",
                WebkitTextStroke: "1.5px #dc2626",
                paintOrder: "stroke fill",
              }}
            >
              Inicio
            </a>
            <a
              href="#historia"
              className="text-yellow-400 hover:text-yellow-300 font-black transition-all tracking-tight text-lg"
              style={{
                fontFamily: "Impact, 'Arial Black', sans-serif",
                WebkitTextStroke: "1.5px #dc2626",
                paintOrder: "stroke fill",
              }}
            >
              Historia
            </a>
            <a
              href="#menu"
              className="text-yellow-400 hover:text-yellow-300 font-black transition-all tracking-tight text-lg"
              style={{
                fontFamily: "Impact, 'Arial Black', sans-serif",
                WebkitTextStroke: "1.5px #dc2626",
                paintOrder: "stroke fill",
              }}
            >
              Menú
            </a>
            <a
              href="#encuentranos"
              className="text-yellow-400 hover:text-yellow-300 font-black transition-all tracking-tight text-lg"
              style={{
                fontFamily: "Impact, 'Arial Black', sans-serif",
                WebkitTextStroke: "1.5px #dc2626",
                paintOrder: "stroke fill",
              }}
            >
              Ubicación
            </a>
            <a
              href="#contacto"
              className="text-yellow-400 hover:text-yellow-300 font-black transition-all tracking-tight text-lg"
              style={{
                fontFamily: "Impact, 'Arial Black', sans-serif",
                WebkitTextStroke: "1.5px #dc2626",
                paintOrder: "stroke fill",
              }}
            >
              Contacto
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-yellow-400 hover:text-yellow-300 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-red-950 border-t border-yellow-400">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a
                href="#inicio"
                onClick={(e) => handleNavClick(e, "#inicio")}
                className="text-yellow-400 hover:text-yellow-300 font-black transition-all text-lg tracking-tight"
                style={{
                  fontFamily: "Impact, 'Arial Black', sans-serif",
                  WebkitTextStroke: "1.5px #dc2626",
                  paintOrder: "stroke fill",
                }}
              >
                Inicio
              </a>
              <a
                href="#historia"
                onClick={(e) => handleNavClick(e, "#historia")}
                className="text-yellow-400 hover:text-yellow-300 font-black transition-all text-lg tracking-tight"
                style={{
                  fontFamily: "Impact, 'Arial Black', sans-serif",
                  WebkitTextStroke: "1.5px #dc2626",
                  paintOrder: "stroke fill",
                }}
              >
                Historia
              </a>
              <a
                href="#menu"
                onClick={(e) => handleNavClick(e, "#menu")}
                className="text-yellow-400 hover:text-yellow-300 font-black transition-all text-lg tracking-tight"
                style={{
                  fontFamily: "Impact, 'Arial Black', sans-serif",
                  WebkitTextStroke: "1.5px #dc2626",
                  paintOrder: "stroke fill",
                }}
              >
                Menú
              </a>
              <a
                href="#encuentranos"
                onClick={(e) => handleNavClick(e, "#encuentranos")}
                className="text-yellow-400 hover:text-yellow-300 font-black transition-all text-lg tracking-tight"
                style={{
                  fontFamily: "Impact, 'Arial Black', sans-serif",
                  WebkitTextStroke: "1.5px #dc2626",
                  paintOrder: "stroke fill",
                }}
              >
                Ubicación
              </a>
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, "#contacto")}
                className="text-yellow-400 hover:text-yellow-300 font-black transition-all text-lg tracking-tight"
                style={{
                  fontFamily: "Impact, 'Arial Black', sans-serif",
                  WebkitTextStroke: "1.5px #dc2626",
                  paintOrder: "stroke fill",
                }}
              >
                Contacto
              </a>
            </div>
          </nav>
        )}
      </header>

      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EPTjeYQLTEStsr4Q0KUkK0w4hEUn8W.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 container mx-auto px-4 text-left pt-8 md:pt-12">
          <div className="max-w-2xl">
            {/* Welcome text with fade-in animation */}
            <p
              className="text-yellow-400 text-lg md:text-2xl font-black mb-4 tracking-widest uppercase transition-all duration-1000"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
                fontFamily: "Impact, 'Arial Black', sans-serif",
                WebkitTextStroke: "1px #dc2626",
                paintOrder: "stroke fill",
              }}
            >
              Bienvenido a
            </p>

            <div
              className="mb-6 transition-all duration-1000"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "translateY(0)" : "translateY(30px)",
                transitionDelay: "0.2s",
              }}
            >
              <Image
                src="/ronnys-logo-design.png"
                alt="Ronny's Logo"
                width={450}
                height={150}
                className="drop-shadow-[0_0_20px_rgba(239,68,68,0.8)] w-full max-w-xs md:max-w-md"
                style={{ background: "transparent" }}
              />
            </div>

            {/* Subtitle with fade-in animation */}
            <p
              className="text-2xl md:text-3xl text-yellow-400 mb-12 font-black tracking-tight transition-all duration-1000"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "translateY(0)" : "translateY(30px)",
                transitionDelay: "0.4s",
                fontFamily: "Impact, 'Arial Black', sans-serif",
                WebkitTextStroke: "2px #dc2626",
                paintOrder: "stroke fill",
              }}
            >
              Donde la Dulzura se Encuentra con la Diversión
            </p>

            {/* CTA Button with fade-in animation */}
            <button
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-black text-lg px-10 py-4 rounded-full shadow-[0_0_30px_rgba(255,215,0,0.6)] hover:shadow-[0_0_40px_rgba(255,215,0,0.8)] transition-all duration-300 transform hover:scale-110 tracking-tight transition-all duration-1000"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "translateY(0)" : "translateY(30px)",
                transitionDelay: "0.6s",
                fontFamily: "Impact, 'Arial Black', sans-serif",
              }}
            >
              Ver Menú
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000"
          style={{
            opacity: heroLoaded ? 1 : 0,
            transitionDelay: "0.8s",
          }}
        >
          <svg className="w-6 h-6 text-yellow-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section id="historia" className="py-20 bg-red-700 relative">
        <PawPrint className="absolute top-10 left-10 animate-bounce" style={{ animationDuration: "3s" }} />
        <PawPrint
          className="absolute top-10 right-10 animate-bounce"
          style={{ animationDuration: "3.3s", animationDelay: "0.4s" }}
        />

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              id="historia-title"
              data-animate-title
              className="text-4xl md:text-5xl font-black text-yellow-400 mb-12 text-center tracking-tighter transition-all duration-1000"
              style={{
                fontFamily: "Impact, 'Arial Black', sans-serif",
                WebkitTextStroke: "2px #dc2626",
                paintOrder: "stroke fill",
                opacity: visibleSections["historia-title"] ? 1 : 0,
                transform: visibleSections["historia-title"] ? "translateY(0)" : "translateY(30px)",
              }}
            >
              🍽️ TODO EMPEZÓ 🍽️
            </h2>
            <div className="space-y-6">
              <Card className="bg-[#2a2d39]/80 border-yellow-400 border-2 rounded-3xl p-8 md:p-10 shadow-[0_0_30px_rgba(250,204,21,0.2)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(250,204,21,0.4)] hover:scale-[1.02]">
                <p className="text-lg md:text-xl text-neutral-100 leading-relaxed text-pretty">
                  👧 Desde pequeña, siempre me fascinó el mundo de la cocina. Pasaba horas jugando con mis juegos de
                  comidita, imaginando sabores, colores y combinaciones que algún día podría crear de verdad. Lo que
                  empezó como un simple pasatiempo infantil se transformó con el tiempo en una auténtica pasión por
                  cocinar y compartir momentos a través de la comida.
                </p>
              </Card>

              <Card className="bg-[#2a2d39]/80 border-yellow-400 border-2 rounded-3xl p-8 md:p-10 shadow-[0_0_30px_rgba(250,204,21,0.2)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(250,204,21,0.4)] hover:scale-[1.02]">
                <p className="text-lg md:text-xl text-neutral-100 leading-relaxed text-pretty">
                  🚚 Esa pasión fue el punto de partida de Ronny's, nuestro food truck sobre ruedas, un sueño hecho
                  realidad gracias al apoyo incondicional de mis padres, Christopher Jiménez y Marlene Espinosa. Ellos
                  creyeron en mí desde el primer momento, y juntos tomamos la valiente decisión de dejarlo todo para
                  construir este proyecto familiar.
                </p>
              </Card>

              <Card className="bg-[#2a2d39]/80 border-yellow-400 border-2 rounded-3xl p-8 md:p-10 shadow-[0_0_30px_rgba(250,204,21,0.2)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(250,204,21,0.4)] hover:scale-[1.02]">
                <p className="text-lg md:text-xl text-neutral-100 leading-relaxed text-pretty">
                  ❤️ Hoy, Ronny's no solo representa mi amor por la cocina, sino también el esfuerzo, la unión y la
                  dedicación de nuestra familia. Cada platillo que servimos lleva un pedacito de esa historia: la de una
                  niña que soñaba con cocinar y una familia que apostó por convertir ese sueño en sabor sobre ruedas.
                </p>
              </Card>

              <Card className="bg-[#2a2d39]/80 border-yellow-400 border-2 rounded-3xl p-8 md:p-10 shadow-[0_0_30px_rgba(250,204,21,0.2)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(250,204,21,0.4)] hover:scale-[1.02]">
                <p className="text-lg md:text-xl text-neutral-100 leading-relaxed text-pretty">
                  🐕 El nombre viene de Ronny, nuestro pequeño chihuahua — la mascota de la familia y ahora la cara de
                  este dulce sueño sobre ruedas.
                </p>
              </Card>

              <div className="flex justify-center my-8">
                <div className="w-full md:w-96 h-96 rounded-3xl overflow-hidden border-4 border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.3)]">
                  <Image
                    src="/chihuahua-ronny.png"
                    alt="Ronny el chihuahua"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-red-700 relative">
        <PawPrint
          className="absolute top-10 left-10 animate-bounce"
          style={{ animationDuration: "3s", animationDelay: "0.2s" }}
        />
        <PawPrint
          className="absolute top-10 right-10 animate-bounce"
          style={{ animationDuration: "3.5s", animationDelay: "0.7s" }}
        />

        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto mb-12">
            <div className="bg-[#f5f0e8] rounded-3xl overflow-hidden border-4 border-black shadow-2xl">
              {/* Checkered border top - BLACK */}
              <div className="h-8 flex">
                {[...Array(40)].map((_, i) => (
                  <div key={i} className={`flex-1 ${i % 2 === 0 ? "bg-black" : "bg-white"}`} />
                ))}
              </div>

              {/* Menu header - only showing Menú label */}
              <div className="px-8 py-6 flex items-center justify-center">
                <h2
                  className="text-5xl md:text-6xl font-black text-black"
                  style={{ fontFamily: "Brush Script MT, cursive" }}
                >
                  Menú
                </h2>
              </div>

              {/* Checkered border bottom - BLACK */}
              <div className="h-8 flex">
                {[...Array(40)].map((_, i) => (
                  <div key={i} className={`flex-1 ${i % 2 === 0 ? "bg-black" : "bg-white"}`} />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-700 border-4 border-yellow-400 rounded-2xl p-4 mb-12 max-w-3xl mx-auto shadow-[0_0_30px_rgba(250,204,21,0.3)]">
            <p
              className="text-center text-yellow-400 font-black text-xl md:text-2xl tracking-tight"
              style={{
                fontFamily: "Impact, 'Arial Black', sans-serif",
                WebkitTextStroke: "1px #dc2626",
                paintOrder: "stroke fill",
              }}
            >
              ⭐ ¡2 x $100 MXN en malteadas cada viernes! ⭐
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="bg-[#F5E6D3] border-4 border-dashed border-red-600 p-6 md:p-8 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden group">
              {/* Checkered pattern background */}
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626),
                                  linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626)`,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              />
              <div className="relative z-10 flex flex-col gap-6 items-center text-center">
                <div className="w-full h-40 md:h-48 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src="/crepas.png"
                    alt="Crepas"
                    className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-700 group-hover:opacity-50 group-hover:scale-110"
                    style={{
                      animation: "fadeInOut 3s ease-in-out infinite",
                    }}
                  />
                </div>
                <div className="flex-1 w-full">
                  <h3
                    className="text-3xl md:text-4xl font-black text-red-600 mb-4 tracking-tight"
                    style={{
                      fontFamily: "Impact, 'Arial Black', sans-serif",
                      WebkitTextStroke: "2px #000000",
                      paintOrder: "stroke fill",
                      fontStyle: "italic",
                    }}
                  >
                    Crepas
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-red-600 font-bold text-lg mb-1 leading-relaxed">Sencillos - $45</p>
                      <p className="text-black text-sm leading-relaxed">
                        Nutella • Cajeta • Zarzamora con queso • Fresa con queso
                      </p>
                    </div>
                    <p className="text-red-600 font-bold text-lg leading-relaxed">Con fruta - $55</p>
                    <p className="text-red-600 font-bold text-lg leading-relaxed">Con fruta y helado - $65</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#F5E6D3] border-4 border-dashed border-red-600 p-6 md:p-8 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626),
                                  linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626)`,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              />
              <div className="relative z-10 flex flex-col gap-6 items-center text-center">
                <div className="w-full h-40 md:h-48 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src="/belgian-waffle-with-berries-and-syrup.jpg"
                    alt="Waffles"
                    className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-700 group-hover:opacity-50 group-hover:scale-110"
                    style={{
                      animation: "fadeInOut 3s ease-in-out infinite 0.5s",
                    }}
                  />
                </div>
                <div className="flex-1 w-full">
                  <h3
                    className="text-3xl md:text-4xl font-black text-red-600 mb-4 tracking-tight"
                    style={{
                      fontFamily: "Impact, 'Arial Black', sans-serif",
                      WebkitTextStroke: "2px #000000",
                      paintOrder: "stroke fill",
                      fontStyle: "italic",
                    }}
                  >
                    Waffles
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-red-600 font-bold text-lg mb-1 leading-relaxed">Sencillos - $55</p>
                      <p className="text-black text-sm leading-relaxed">Cajeta • Nutella • Fresa • Maple • Lechera</p>
                    </div>
                    <p className="text-red-600 font-bold text-lg leading-relaxed">Con fruta - $65</p>
                    <p className="text-red-600 font-bold text-lg leading-relaxed">Con fruta y helado - $75</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#F5E6D3] border-4 border-dashed border-red-600 p-6 md:p-8 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626),
                                  linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626)`,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              />
              <div className="relative z-10 flex flex-col gap-6 items-center text-center">
                <div className="w-full h-40 md:h-48 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src="/stack-of-pancakes-with-butter-and-syrup.jpg"
                    alt="Hotcakes"
                    className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-700 group-hover:opacity-50 group-hover:scale-110"
                    style={{
                      animation: "fadeInOut 3s ease-in-out infinite 1s",
                    }}
                  />
                </div>
                <div className="flex-1 w-full">
                  <h3
                    className="text-3xl md:text-4xl font-black text-red-600 mb-4 tracking-tight"
                    style={{
                      fontFamily: "Impact, 'Arial Black', sans-serif",
                      WebkitTextStroke: "2px #000000",
                      paintOrder: "stroke fill",
                      fontStyle: "italic",
                    }}
                  >
                    Hotcakes
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-red-600 font-bold text-lg mb-1 leading-relaxed">Sencillos - $50</p>
                      <p className="text-black text-sm leading-relaxed">Nutella • Fresa • Cajeta • Maple • Lechera</p>
                    </div>
                    <p className="text-red-600 font-bold text-lg leading-relaxed">Con fruta - $60</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#F5E6D3] border-4 border-dashed border-red-600 p-6 md:p-8 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626),
                                  linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626)`,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              />
              <div className="relative z-10 flex flex-col gap-6 items-center text-center">
                <div className="w-full h-40 md:h-48 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src="/loaded-fries.png"
                    alt="Snacks"
                    className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-700 group-hover:opacity-50 group-hover:scale-110"
                    style={{
                      animation: "fadeInOut 3s ease-in-out infinite 1.5s",
                    }}
                  />
                </div>
                <div className="flex-1 w-full">
                  <h3
                    className="text-3xl md:text-4xl font-black text-red-600 mb-4 tracking-tight"
                    style={{
                      fontFamily: "Impact, 'Arial Black', sans-serif",
                      WebkitTextStroke: "2px #000000",
                      paintOrder: "stroke fill",
                      fontStyle: "italic",
                    }}
                  >
                    Snacks
                  </h3>
                  <div className="space-y-1 text-black leading-relaxed">
                    <p>Salchipapas ............... $55</p>
                    <p>Papas a la francesa ............... $40</p>
                    <p>Salchipulpos ............... $55</p>
                    <p>Maruchan ............... $30</p>
                    <p>Nachos ............... $45</p>
                    <p>Papas locas ............... $25</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#F5E6D3] border-4 border-dashed border-red-600 p-6 md:p-8 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626),
                                  linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626)`,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              />
              <div className="relative z-10 flex flex-col gap-6 items-center text-center">
                <div className="w-full h-40 md:h-48 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src="/malteada.png"
                    alt="Bebidas"
                    className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-700 group-hover:opacity-50 group-hover:scale-110 object-top"
                    style={{
                      animation: "fadeInOut 3s ease-in-out infinite 2s",
                    }}
                  />
                </div>
                <div className="flex-1 w-full">
                  <h3
                    className="text-3xl md:text-4xl font-black text-red-600 mb-4 tracking-tight"
                    style={{
                      fontFamily: "Impact, 'Arial Black', sans-serif",
                      WebkitTextStroke: "2px #000000",
                      paintOrder: "stroke fill",
                      fontStyle: "italic",
                    }}
                  >
                    Bebidas
                  </h3>
                  <div className="space-y-1 text-black leading-relaxed">
                    <p>Capuchino ............... $35</p>
                    <p>Americano ............... $22</p>
                    <p>Malteada fresa, vainilla, chocolate y galleta ............... $55</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#F5E6D3] border-4 border-dashed border-red-600 p-6 md:p-8 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626),
                                  linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626)`,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              />
              <div className="relative z-10 flex flex-col gap-6 items-center text-center">
                <div className="w-full h-40 md:h-48 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src="/strawberries-with-cream-dessert.jpg"
                    alt="Con crema"
                    className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-700 group-hover:opacity-50 group-hover:scale-110"
                    style={{
                      animation: "fadeInOut 3s ease-in-out infinite 2.5s",
                    }}
                  />
                </div>
                <div className="flex-1 w-full">
                  <h3
                    className="text-3xl md:text-4xl font-black text-red-600 mb-4 tracking-tight"
                    style={{
                      fontFamily: "Impact, 'Arial Black', sans-serif",
                      WebkitTextStroke: "2px #000000",
                      paintOrder: "stroke fill",
                      fontStyle: "italic",
                    }}
                  >
                    Con crema
                  </h3>
                  <div className="space-y-1 text-black leading-relaxed">
                    <p>Fresas con crema ............... $60</p>
                    <p>Plátanos con crema ............... $50</p>
                    <p>Duraznos con crema ............... $50</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#F5E6D3] border-4 border-dashed border-red-600 p-6 md:p-8 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626),
                                  linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626)`,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              />
              <div className="relative z-10 flex flex-col gap-6 items-center text-center">
                <div className="w-full h-40 md:h-48 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src="/flan-napolitano-dessert.jpg"
                    alt="Flan"
                    className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-700 group-hover:opacity-50 group-hover:scale-110"
                    style={{
                      animation: "fadeInOut 3s ease-in-out infinite 3s",
                    }}
                  />
                </div>
                <div className="flex-1 w-full">
                  <h3
                    className="text-3xl md:text-4xl font-black text-red-600 mb-4 tracking-tight"
                    style={{
                      fontFamily: "Impact, 'Arial Black', sans-serif",
                      WebkitTextStroke: "2px #000000",
                      paintOrder: "stroke fill",
                      fontStyle: "italic",
                    }}
                  >
                    Flan
                  </h3>
                  <p className="text-black leading-relaxed">Flan napolitano ............... $42</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="encuentranos" className="py-20 bg-red-700 relative">
        <PawPrint
          className="absolute top-10 left-10 animate-bounce"
          style={{ animationDuration: "3s", animationDelay: "0.3s" }}
        />
        <PawPrint
          className="absolute top-10 right-10 animate-bounce"
          style={{ animationDuration: "3.3s", animationDelay: "0.6s" }}
        />

        <div className="container mx-auto px-4">
          <h2
            id="encuentranos-title"
            data-animate-title
            className="text-4xl md:text-6xl font-black text-red-600 mb-8 text-center tracking-tighter transition-all duration-1000"
            style={{
              fontFamily: "Impact, 'Arial Black', sans-serif",
              WebkitTextStroke: "1px #000000",
              paintOrder: "stroke fill",
              opacity: visibleSections["encuentranos-title"] ? 1 : 0,
              transform: visibleSections["encuentranos-title"] ? "translateY(0)" : "translateY(30px)",
            }}
          >
            ENCUÉNTRANOS
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8 text-center">
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8 text-yellow-400 flex-shrink-0" />
                <p className="text-xl md:text-2xl text-neutral-200">
                  <span
                    className="text-yellow-400 font-black tracking-tight"
                    style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
                  >
                    26 C. Nueva York, Ecatepec de Morelos, Estado de México
                  </span>
                </p>
              </div>
            </div>

            <h3
              className="text-3xl md:text-4xl font-black text-yellow-400 mb-6 text-center tracking-tighter"
              style={{
                fontFamily: "Impact, 'Arial Black', sans-serif",
                WebkitTextStroke: "2px #dc2626",
                paintOrder: "stroke fill",
              }}
            >
              VISÍTANOS
            </h3>
            <Card className="bg-neutral-900 border-yellow-400 border-4 overflow-hidden shadow-[0_0_30px_rgba(250,204,21,0.3)] p-0">
              <div className="w-full h-[400px] md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.8234567890123!2d-99.05555!3d19.63333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8c8c8c8c8c9%3A0x1234567890abcdef!2s26%20C.%20Nueva%20York%2C%20Ecatepec%20de%20Morelos%2C%20Estado%20de%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-700 relative">
        <PawPrint className="absolute top-10 left-10 animate-bounce" style={{ animationDuration: "3s" }} />
        <PawPrint
          className="absolute top-10 right-10 animate-bounce"
          style={{ animationDuration: "3.4s", animationDelay: "0.6s" }}
        />

        <div className="container mx-auto px-4">
          <h2
            id="clientes-title"
            data-animate-title
            className="text-4xl md:text-6xl font-black text-yellow-400 mb-12 text-center tracking-tighter transition-all duration-1000"
            style={{
              fontFamily: "Impact, 'Arial Black', sans-serif",
              WebkitTextStroke: "2px #dc2626",
              paintOrder: "stroke fill",
              opacity: visibleSections["clientes-title"] ? 1 : 0,
              transform: visibleSections["clientes-title"] ? "translateY(0)" : "translateY(30px)",
            }}
          >
            LO QUE DICEN NUESTROS CLIENTES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto bg-red-800 rounded-3xl p-8 md:p-12">
            <Card className="bg-[#F5E6D3] border-yellow-400 border-4 rounded-3xl p-6 hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] transition-all duration-300 hover:scale-110">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-black text-lg mb-4 text-pretty">Las mejores malteadas de Ecatepec</p>
              <p
                className="font-black text-lg"
                style={{
                  color: "#dc2626",
                  WebkitTextStroke: "0.5px #000000",
                  paintOrder: "stroke fill",
                }}
              >
                — Carla M.
              </p>
            </Card>

            <Card className="bg-[#F5E6D3] border-yellow-400 border-4 rounded-3xl p-6 hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] transition-all duration-300 hover:scale-110">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-black text-lg mb-4 text-pretty">Ambiente increíble y servicio spectacular</p>
              <p
                className="font-black text-lg"
                style={{
                  color: "#dc2626",
                  WebkitTextStroke: "0.5px #000000",
                  paintOrder: "stroke fill",
                }}
              >
                — Luis R.
              </p>
            </Card>

            <Card className="bg-[#F5E6D3] border-yellow-400 border-4 rounded-3xl p-6 hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] transition-all duration-300 hover:scale-110">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-black text-lg mb-4 text-pretty">
                Las crepas son un sueño, y el logo del perrito es lo más lindo
              </p>
              <p
                className="font-black text-lg"
                style={{
                  color: "#dc2626",
                  WebkitTextStroke: "0.5px #000000",
                  paintOrder: "stroke fill",
                }}
              >
                — Sofía G.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacto" className="py-20 bg-red-700 relative">
        <PawPrint
          className="absolute top-10 left-10 animate-bounce"
          style={{ animationDuration: "3s", animationDelay: "0.2s" }}
        />
        <PawPrint
          className="absolute top-10 right-10 animate-bounce"
          style={{ animationDuration: "3.3s", animationDelay: "0.5s" }}
        />

        <div className="container mx-auto px-4">
          <h2
            id="contacto-title"
            data-animate-title
            className="text-4xl md:text-6xl font-black text-yellow-400 mb-16 text-center tracking-tighter transition-all duration-1000"
            style={{
              fontFamily: "Impact, 'Arial Black', sans-serif",
              WebkitTextStroke: "2px #dc2626",
              paintOrder: "stroke fill",
              opacity: visibleSections["contacto-title"] ? 1 : 0,
              transform: visibleSections["contacto-title"] ? "translateY(0)" : "translateY(30px)",
            }}
          >
            CONTÁCTANOS
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Ubicación */}
            <Card className="bg-transparent border-2 border-yellow-400 rounded-2xl p-8 text-center">
              <h3
                className="text-2xl font-black text-yellow-400 mb-6 tracking-tight"
                style={{
                  fontFamily: "Impact, 'Arial Black', sans-serif",
                  WebkitTextStroke: "1.5px #dc2626",
                  paintOrder: "stroke fill",
                }}
              >
                Ubicación
              </h3>
              <div className="space-y-4 text-neutral-100">
                <div className="flex items-start gap-3 justify-center">
                  <MapPin className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <p className="text-sm md:text-lg break-words">
                    26 C. Nueva York, Ecatepec de Morelos, Estado de México
                  </p>
                </div>
                <div className="flex items-start gap-3 justify-center">
                  <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm md:text-lg break-all">roonysfoodtruck04@gmail.com</p>
                </div>
                <div className="flex items-start gap-3 justify-center">
                  <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <p className="text-sm md:text-lg">5652346248</p>
                </div>
              </div>
            </Card>

            {/* Column 2: Horarios */}
            <Card className="bg-transparent border-2 border-yellow-400 rounded-2xl p-8 text-center">
              <h3
                className="text-2xl font-black text-yellow-400 mb-6 tracking-tight"
                style={{
                  fontFamily: "Impact, 'Arial Black', sans-serif",
                  WebkitTextStroke: "1.5px #dc2626",
                  paintOrder: "stroke fill",
                }}
              >
                Horarios
              </h3>
              <div className="space-y-3 text-neutral-100 text-lg">
                <p>Lunes a Jueves</p>
                <p className="font-bold text-red-400">OFF</p>
                <p className="mt-4">Viernes a Domingo</p>
                <p className="font-bold">6:00 pm - 11:00 pm</p>
              </div>
            </Card>

            {/* Column 3: Síguenos */}
            <Card className="bg-transparent border-2 border-yellow-400 rounded-2xl p-8 text-center">
              <h3
                className="text-2xl font-black text-yellow-400 mb-6 tracking-tight"
                style={{
                  fontFamily: "Impact, 'Arial Black', sans-serif",
                  WebkitTextStroke: "1.5px #dc2626",
                  paintOrder: "stroke fill",
                }}
              >
                Síguenos
              </h3>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/ronnystruck04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-neutral-100 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                      borderRadius: "50%",
                      padding: "2px",
                    }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  </svg>
                  <span className="text-sm md:text-base">Instagram</span>
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61578442170631"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-neutral-100 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="text-sm md:text-base">Facebook</span>
                </a>

                <a
                  href="https://www.tiktok.com/@ronnystruck04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-neutral-100 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                  aria-label="TikTok"
                >
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 2.31-4.64 2.86 2.86 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.54-.05z" />
                  </svg>
                  <span className="text-sm md:text-base">TikTok</span>
                </a>

                <a
                  href="https://x.com/ronnystruck04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-neutral-100 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                  aria-label="X"
                >
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.694-5.829 6.694h-3.328l7.691-8.793-8.162-10.708h6.51l4.759 6.289 5.331-6.289zM16.17 18.933h1.829L5.25 3.75H3.306l12.864 15.183z" />
                  </svg>
                  <span className="text-sm md:text-base">X</span>
                </a>

                <a
                  href="https://wa.me/5652346248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-neutral-100 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span className="text-sm md:text-base">WhatsApp</span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-red-950 py-8 border-t-2 border-yellow-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/ronny-logo.png"
                alt="Ronny Chihuahua Logo"
                width={70}
                height={70}
                className="drop-shadow-[0_0_20px_rgba(255,215,0,0.7)]"
              />
              <Image
                src="/ronnys-logo-design.png"
                alt="Ronny's Logo"
                width={180}
                height={60}
                className="drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]"
                style={{ background: "transparent" }}
              />
            </div>
            <p className="text-neutral-400 text-center">© 2025 Ronny Food Truck. Todos los derechos reservados.</p>
            <p className="text-yellow-400 text-sm">🐕 Dulzura sobre ruedas</p>
          </div>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  )
}
