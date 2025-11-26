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

const ResponsiveIframe = ({ src }: { src: string }) => (
  <div className="w-full" style={{ aspectRatio: "9/16" }}>
    <iframe
      src={src}
      width="100%"
      height="100%"
      frameBorder="0"
      allow="autoplay"
      allowFullScreen
      style={{ display: "block", borderRadius: "1.5rem" }}
    ></iframe>
  </div>
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
          backgroundImage: `url('/images/image.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
          backgroundRepeat: "no-repeat",
          WebkitBackgroundSize: "cover",
          WebkitBackgroundPosition: "center",
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

      <section id="menu" className="py-20 bg-red-700 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url('/stack-of-pancakes-with-butter-and-syrup.jpg')`,
            backgroundSize: "400px 400px",
            backgroundRepeat: "repeat",
          }}
        />

        <PawPrint
          className="absolute top-10 left-10 animate-bounce"
          style={{ animationDuration: "3s", animationDelay: "0.2s" }}
        />
        <PawPrint
          className="absolute top-10 right-10 animate-bounce"
          style={{ animationDuration: "3.5s", animationDelay: "0.7s" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto mb-12">
            <div className="bg-[#f5f0e8] rounded-3xl overflow-hidden border-4 border-black shadow-2xl">
              {/* Checkered border top - BLACK */}
              <div className="h-8 flex">
                {[...Array(40)].map((_, i) => (
                  <div key={i} className={`flex-1 ${i % 2 === 0 ? "bg-black" : "bg-white"}`} />
                ))}
              </div>

              {/* Menu header */}
              <div className="px-8 py-6 flex items-center justify-center">
                <h2
                  id="menu-title"
                  data-animate-title
                  className="text-5xl md:text-6xl font-black text-black transition-all duration-1000"
                  style={{
                    fontFamily: "Brush Script MT, cursive",
                    opacity: visibleSections["menu-title"] ? 1 : 0,
                    transform: visibleSections["menu-title"] ? "translateY(0)" : "translateY(30px)",
                  }}
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

          <div className="max-w-7xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {[
                { name: "Crepas", id: "crepas" },
                { name: "Waffles", id: "waffles" },
                { name: "Hotcakes", id: "hotcakes" },
                { name: "Snacks", id: "snacks" },
                { name: "Bebidas", id: "bebidas" },
                { name: "Con crema", id: "concrema" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  className={`px-4 md:px-6 py-2 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                    true
                      ? "bg-red-600 text-yellow-400 border-2 border-yellow-400"
                      : "bg-neutral-800 text-neutral-300 border-2 border-neutral-700 hover:border-yellow-400"
                  }`}
                  style={{
                    fontFamily: "Impact, 'Arial Black', sans-serif",
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-[#F5E6D3] border-4 border-dashed border-red-600 p-6 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626),
                                  linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626)`,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              />
              <div className="relative z-10 flex flex-col gap-4 items-center text-center">
                <div className="w-full h-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src="/crepas.png"
                    alt="Crepas"
                    className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-700 group-hover:opacity-50"
                    style={{
                      animation: "fadeInOut 3s ease-in-out infinite",
                    }}
                  />
                </div>
                <div className="flex-1 w-full">
                  <h3
                    className="text-2xl md:text-3xl font-black text-red-600 mb-2 tracking-tight"
                    style={{
                      fontFamily: "Impact, 'Arial Black', sans-serif",
                      WebkitTextStroke: "1px #000000",
                      paintOrder: "stroke fill",
                      fontStyle: "italic",
                    }}
                  >
                    Crepas
                  </h3>
                  <div className="space-y-1 text-xs md:text-sm">
                    <p className="text-red-600 font-bold">Sencillos - $45</p>
                    <p className="text-red-600 font-bold">Con fruta - $55</p>
                    <p className="text-red-600 font-bold">Con fruta y helado - $65</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#F5E6D3] border-4 border-dashed border-red-600 p-6 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626),
                                  linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626)`,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              />
              <div className="relative z-10 flex flex-col gap-4 items-center text-center">
                <div className="w-full h-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src="/belgian-waffle-with-berries-and-syrup.jpg"
                    alt="Waffles"
                    className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-700 group-hover:opacity-50"
                    style={{
                      animation: "fadeInOut 3s ease-in-out infinite 0.5s",
                    }}
                  />
                </div>
                <div className="flex-1 w-full">
                  <h3
                    className="text-2xl md:text-3xl font-black text-red-600 mb-2 tracking-tight"
                    style={{
                      fontFamily: "Impact, 'Arial Black', sans-serif",
                      WebkitTextStroke: "1px #000000",
                      paintOrder: "stroke fill",
                      fontStyle: "italic",
                    }}
                  >
                    Waffles
                  </h3>
                  <div className="space-y-1 text-xs md:text-sm">
                    <p className="text-red-600 font-bold">Sencillos - $55</p>
                    <p className="text-red-600 font-bold">Con fruta - $65</p>
                    <p className="text-red-600 font-bold">Con fruta y helado - $75</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#F5E6D3] border-4 border-dashed border-red-600 p-6 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626),
                                  linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626)`,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              />
              <div className="relative z-10 flex flex-col gap-4 items-center text-center">
                <div className="w-full h-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src="/stack-of-pancakes-with-butter-and-syrup.jpg"
                    alt="Hotcakes"
                    className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-700 group-hover:opacity-50"
                    style={{
                      animation: "fadeInOut 3s ease-in-out infinite 1s",
                    }}
                  />
                </div>
                <div className="flex-1 w-full">
                  <h3
                    className="text-2xl md:text-3xl font-black text-red-600 mb-2 tracking-tight"
                    style={{
                      fontFamily: "Impact, 'Arial Black', sans-serif",
                      WebkitTextStroke: "1px #000000",
                      paintOrder: "stroke fill",
                      fontStyle: "italic",
                    }}
                  >
                    Hotcakes
                  </h3>
                  <div className="space-y-1 text-xs md:text-sm">
                    <p className="text-red-600 font-bold">Sencillos - $50</p>
                    <p className="text-red-600 font-bold">Con fruta - $60</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#F5E6D3] border-4 border-dashed border-red-600 p-6 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626),
                                  linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626)`,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              />
              <div className="relative z-10 flex flex-col gap-4 items-center text-center">
                <div className="w-full h-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src="/loaded-fries.png"
                    alt="Snacks"
                    className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-700 group-hover:opacity-50"
                    style={{
                      animation: "fadeInOut 3s ease-in-out infinite 1.5s",
                    }}
                  />
                </div>
                <div className="flex-1 w-full">
                  <h3
                    className="text-2xl md:text-3xl font-black text-red-600 mb-2 tracking-tight"
                    style={{
                      fontFamily: "Impact, 'Arial Black', sans-serif",
                      WebkitTextStroke: "1px #000000",
                      paintOrder: "stroke fill",
                      fontStyle: "italic",
                    }}
                  >
                    Snacks
                  </h3>
                  <div className="space-y-1 text-xs md:text-sm">
                    <p>Salchipapas ............... $55</p>
                    <p>Papas a la francesa ............... $40</p>
                    <p>Salchipulpos ............... $55</p>
                    <p>Maruchan ............... $30</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#F5E6D3] border-4 border-dashed border-red-600 p-6 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626),
                                  linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626)`,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              />
              <div className="relative z-10 flex flex-col gap-4 items-center text-center">
                <div className="w-full h-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src="/malteada.png"
                    alt="Bebidas"
                    className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-700 group-hover:opacity-50 object-top"
                    style={{
                      animation: "fadeInOut 3s ease-in-out infinite 2s",
                    }}
                  />
                </div>
                <div className="flex-1 w-full">
                  <h3
                    className="text-2xl md:text-3xl font-black text-red-600 mb-2 tracking-tight"
                    style={{
                      fontFamily: "Impact, 'Arial Black', sans-serif",
                      WebkitTextStroke: "1px #000000",
                      paintOrder: "stroke fill",
                      fontStyle: "italic",
                    }}
                  >
                    Bebidas
                  </h3>
                  <div className="space-y-1 text-xs md:text-sm">
                    <p>Capuchino ............... $35</p>
                    <p>Americano ............... $22</p>
                    <p>Malteada ............... $55</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#F5E6D3] border-4 border-dashed border-red-600 p-6 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626),
                                  linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626)`,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              />
              <div className="relative z-10 flex flex-col gap-4 items-center text-center">
                <div className="w-full h-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src="/strawberries-with-cream-dessert.jpg"
                    alt="Con crema"
                    className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-700 group-hover:opacity-50"
                    style={{
                      animation: "fadeInOut 3s ease-in-out infinite 2.5s",
                    }}
                  />
                </div>
                <div className="flex-1 w-full">
                  <h3
                    className="text-2xl md:text-3xl font-black text-red-600 mb-2 tracking-tight"
                    style={{
                      fontFamily: "Impact, 'Arial Black', sans-serif",
                      WebkitTextStroke: "1px #000000",
                      paintOrder: "stroke fill",
                      fontStyle: "italic",
                    }}
                  >
                    Con crema
                  </h3>
                  <div className="space-y-1 text-xs md:text-sm">
                    <p>Fresas con crema ............... $60</p>
                    <p>Plátanos con crema ............... $50</p>
                    <p>Duraznos con crema ............... $50</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#F5E6D3] border-4 border-dashed border-red-600 p-6 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626),
                                  linear-gradient(45deg, #dc2626 25%, transparent 25%, transparent 75%, #dc2626 75%, #dc2626)`,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 10px 10px",
                }}
              />
              <div className="relative z-10 flex flex-col gap-4 items-center text-center">
                <div className="w-full h-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src="/flan.jpg"
                    alt="Flanes"
                    className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-700 group-hover:opacity-50"
                    style={{
                      animation: "fadeInOut 3s ease-in-out infinite 3s",
                    }}
                  />
                </div>
                <div className="flex-1 w-full">
                  <h3
                    className="text-2xl md:text-3xl font-black text-red-600 mb-2 tracking-tight"
                    style={{
                      fontFamily: "Impact, 'Arial Black', sans-serif",
                      WebkitTextStroke: "1px #000000",
                      paintOrder: "stroke fill",
                      fontStyle: "italic",
                    }}
                  >
                    Flanes
                  </h3>
                  <div className="space-y-1 text-xs md:text-sm">
                    <p>Flan casero ............... $35</p>
                    <p>Flan con fruta ............... $45</p>
                  </div>
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

      <section className="py-20 bg-red-700 relative">
        <PawPrint className="absolute top-10 left-10 animate-bounce" style={{ animationDuration: "3s" }} />
        <PawPrint
          className="absolute top-10 right-10 animate-bounce"
          style={{ animationDuration: "3.3s", animationDelay: "0.4s" }}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="bg-red-800 border-yellow-400 border-4 rounded-3xl p-8 hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] transition-all duration-300 hover:scale-105 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                  alt="Carla M."
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-xl font-black text-yellow-400 mb-2"
                style={{
                  WebkitTextStroke: "0.5px #000000",
                  paintOrder: "stroke fill",
                }}
              >
                Carla M.
              </h3>
              <p className="text-neutral-100 text-sm mb-4">Las mejores malteadas de Ecatepec</p>
              <div
                className="flex gap-1 justify-center"
                style={{
                  animation: "fadeInOut 2s ease-in-out infinite",
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-red-800 border-yellow-400 border-4 rounded-3xl p-8 hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] transition-all duration-300 hover:scale-105 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-300 to-blue-500 mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  alt="Luis R."
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-xl font-black text-yellow-400 mb-2"
                style={{
                  WebkitTextStroke: "0.5px #000000",
                  paintOrder: "stroke fill",
                }}
              >
                Luis R.
              </h3>
              <p className="text-neutral-100 text-sm mb-4">Ambiente increíble y servicio spectacular</p>
              <div
                className="flex gap-1 justify-center"
                style={{
                  animation: "fadeInOut 2s ease-in-out infinite 0.3s",
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-red-800 border-yellow-400 border-4 rounded-3xl p-8 hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] transition-all duration-300 hover:scale-105 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                  alt="Sofía G."
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="text-xl font-black text-yellow-400 mb-2"
                style={{
                  WebkitTextStroke: "0.5px #000000",
                  paintOrder: "stroke fill",
                }}
              >
                Sofía G.
              </h3>
              <p className="text-neutral-100 text-sm mb-4">
                Las crepas son un sueño, y el logo del perrito es lo más lindo
              </p>
              <div
                className="flex gap-1 justify-center"
                style={{
                  animation: "fadeInOut 2s ease-in-out infinite 0.6s",
                }}
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="promociones" className="py-20 bg-red-700 relative">
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
            id="promociones-title"
            data-animate-title
            className="text-4xl md:text-6xl font-black text-yellow-400 mb-16 text-center tracking-tighter transition-all duration-1000"
            style={{
              fontFamily: "Impact, 'Arial Black', sans-serif",
              WebkitTextStroke: "2px #dc2626",
              paintOrder: "stroke fill",
              opacity: visibleSections["promociones-title"] ? 1 : 0,
              transform: visibleSections["promociones-title"] ? "translateY(0)" : "translateY(30px)",
            }}
          >
            PROMOCIONES
          </h2>

          <div className="max-w-6xl mx-auto flex justify-center">
            {/* CHANGE: Removed grid layout, now only video centered */}
            <div className="w-full max-w-md border-4 border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.3)] rounded-3xl overflow-hidden">
              <div style={{ aspectRatio: "9/16" }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/HKpJcQ4-KEc?autoplay=1&mute=1&loop=1&playlist=HKpJcQ4-KEc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ display: "block", borderRadius: "1.5rem" }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHANGE: Removed CONTÁCTANOS section */}

      <footer className="bg-neutral-900 border-t-4 border-red-600">
        {/* Top section with logo and social media */}
        <div className="bg-neutral-900 py-8 px-4 md:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Left - Logo and branding */}
              <div className="flex flex-col items-center md:items-start gap-3">
                <div className="flex items-center gap-2">
                  <Image
                    src="/ronny-logo.png"
                    alt="Ronny Chihuahua Logo"
                    width={50}
                    height={50}
                    className="drop-shadow-[0_0_20px_rgba(255,215,0,0.7)]"
                  />
                  <Image
                    src="/ronnys-logo-design.png"
                    alt="Ronny's Logo"
                    width={120}
                    height={40}
                    className="drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]"
                  />
                </div>
                <p className="text-yellow-400 text-sm md:text-center">🐕 Dulzura sobre ruedas</p>
              </div>

              {/* Center - Quick Links */}
              <div className="flex flex-col items-center gap-4">
                <h4 className="text-yellow-400 font-bold tracking-tight">Menú</h4>
                <ul className="flex flex-col gap-2 text-neutral-300 text-sm text-center">
                  <li>
                    <a href="#inicio" className="hover:text-yellow-400 transition-colors">
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a href="#historia" className="hover:text-yellow-400 transition-colors">
                      Historia
                    </a>
                  </li>
                  <li>
                    <a href="#menu" className="hover:text-yellow-400 transition-colors">
                      Menú
                    </a>
                  </li>
                  <li>
                    <a href="#encuentranos" className="hover:text-yellow-400 transition-colors">
                      Encuéntranos
                    </a>
                  </li>
                </ul>
              </div>

              {/* Right - Horarios and Contacto */}
              <div className="flex flex-col md:flex-col gap-6">
                <div className="text-center md:text-right">
                  <h4 className="text-yellow-400 font-bold tracking-tight mb-2">Horarios</h4>
                  <p className="text-neutral-300 text-sm">L-J: OFF</p>
                  <p className="text-neutral-300 text-sm">V-D: 6:00 PM - 11:00 PM</p>
                </div>
                <div className="text-center md:text-right">
                  <h4 className="text-yellow-400 font-bold tracking-tight mb-2">Contacto</h4>
                  <p className="text-neutral-300 text-sm">📧 roonysfoodtruck04@gmail.com</p>
                  <p className="text-neutral-300 text-sm">📞 5652346248</p>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-700 pt-6 flex justify-center gap-4 md:gap-6 flex-wrap">
              <a
                href="https://www.instagram.com/ronnystruck04/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
              >
                {/* CHANGE: Fixed Instagram logo with proper SVG viewBox and styling */}
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578442170631"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Facebook</span>
              </a>
              <a
                href="https://www.tiktok.com/@ronnystruck04"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
              >
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.07 6.81 6.81 0 1 0 6.82 6.87v-3.19a4.82 4.82 0 0 0 3.83 1.76v-3.45a4.81 4.81 0 0 1-3.66-1.84z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">TikTok</span>
              </a>
              <a
                href="https://x.com/ronnystruck04"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
              >
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">X</span>
              </a>
              <a
                href="https://wa.me/5652346248"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
              >
                {/* CHANGE: Fixed WhatsApp logo with proper sizing and padding */}
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.77c0 2.716.738 5.355 2.122 7.683l-2.262 6.795 6.975-2.23c2.25 1.231 4.784 1.884 7.316 1.884 5.341 0 9.852-4.487 9.797-10.011a9.844 9.844 0 00-2.928-6.93 9.87 9.87 0 00-7.21-2.881m0 0" />
                  </svg>
                </div>
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="bg-red-600 py-4 text-center border-t border-neutral-700">
          <p className="text-white text-sm font-medium">© 2025 Ronny's Food Truck. Todos los derechos reservados.</p>
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
