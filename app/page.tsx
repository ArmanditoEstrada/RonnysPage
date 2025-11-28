"use client"

import type React from "react"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, MapPin, Mail, Phone, Star, ChevronUp } from "lucide-react"

const PawPrint = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    className={`w-6 h-6 text-yellow-400/20 ${className || ""}`}
    style={style}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <circle cx="12" cy="8" r="3" />
    <circle cx="6" cy="10" r="2" />
    <circle cx="18" cy="10" r="2" />
    <circle cx="8" cy="16" r="2" />
    <circle cx="16" cy="16" r="2" />
  </svg>
)

const menuCategories = [
  { name: "Crepas", id: "crepas" },
  { name: "Waffles", id: "waffles" },
  { name: "Hotcakes", id: "hotcakes" },
  { name: "Snacks", id: "snacks" },
  { name: "Bebidas", id: "bebidas" },
  { name: "Con crema", id: "concrema" },
]

const menuItems = [
  {
    title: "Crepas",
    prices: ["Sencillos - $55", "Con fruta - $65", "Con fruta y helado - $75"],
    ingredients: "Cajeta • Nutella • Fresa • Maple • Lechera",
    image: "/crepas.png",
    category: "crepas",
  },
  {
    title: "Waffles",
    prices: ["Sencillos - $45", "Con fruta - $55", "Con fruta y helado - $65"],
    ingredients: "Nutella • Cajeta • Zarzamora con queso • Fresa con queso",
    image: "/images/waffle-choco.jpg",
    category: "waffles",
  },
  {
    title: "Hotcakes",
    prices: ["Sencillos - $50", "Con fruta - $60"],
    ingredients: "Nutella • Fresa • Cajeta • Maple • Lechera",
    image: "/images/hotcakes-cream.jpg",
    category: "hotcakes",
  },
  {
    title: "Snacks",
    prices: [
      "Salchipapas - $55",
      "Papas a la francesa - $40",
      "Salchipulpos - $55",
      "Maruchan - $30",
      "Nachos - $45",
      "Papas locas - $25",
    ],
    ingredients: "",
    image: "/images/snacks.jpg",
    category: "snacks",
  },
  {
    title: "Bebidas",
    prices: ["Malteadas - $50", "2x$100 los viernes"],
    ingredients: "Chocolate • Fresa • Vainilla • Oreo",
    image: "/malteada.png",
    category: "bebidas",
  },
  {
    title: "Flan",
    prices: ["Sencillo - $45", "Con fruta - $55"],
    ingredients: "Cajeta • Lechera • Fresa",
    image: "/flan.jpg",
    category: "concrema",
  },
]

const testimonials = [
  {
    name: "Carla M.",
    text: "Las mejores malteadas de Ecatepec",
    image: "/happy-mexican-woman-smiling-portrait.jpg",
  },
  {
    name: "Luis R.",
    text: "Ambiente increíble y servicio espectacular",
    image: "/happy-mexican-man-smiling-portrait.jpg",
  },
  {
    name: "Sofía G.",
    text: "Las crepas son un sueño, y el logo del perrito es lo más lindo",
    image: "/young-latina-woman-smiling-portrait.jpg",
  },
]

export default function RonnysPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState<{ [key: string]: boolean }>({})
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeCategory, setActiveCategory] = useState("crepas")

  useEffect(() => {
    setHeroLoaded(true)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const animatedElements = document.querySelectorAll("[data-animate-title]")
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const filteredItems = menuItems.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen bg-red-700">
      <header className="fixed top-0 left-0 right-0 z-50 bg-red-950/95 backdrop-blur-sm border-b-4 border-yellow-400">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <Image
              src="/ronny-logo.png"
              alt="Ronny Chihuahua Logo"
              width={60}
              height={60}
              priority
              className="drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] hover:scale-105 transition-transform"
            />
            <Image
              src="/ronnys-logo-design.png"
              alt="Ronny's Logo"
              width={140}
              height={45}
              priority
              className="drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Inicio", "Historia", "Menú", "Ubicación"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace("ú", "u")}`}
                onClick={(e) => handleNavClick(e, `#${item.toLowerCase().replace("ú", "u")}`)}
                className="text-yellow-400 hover:text-yellow-300 font-black text-lg tracking-tight transition-colors"
                style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-yellow-400 hover:text-yellow-300 p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-red-950 border-t border-yellow-400/50 px-4 py-4 flex flex-col gap-4">
            {["Inicio", "Historia", "Menú", "Ubicación"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace("ú", "u")}`}
                onClick={(e) => handleNavClick(e, `#${item.toLowerCase().replace("ú", "u")}`)}
                className="text-yellow-400 hover:text-yellow-300 font-black text-lg"
                style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="inicio" className="relative min-h-screen flex items-start pt-32 md:pt-40 overflow-hidden">
        {/* Background Image - Optimized */}
        <Image
          src="/images/image.png"
          alt="Ronny's Food Truck"
          fill
          priority
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-red-900/80" />

        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div className="max-w-xl">
            <p
              className="text-yellow-400 text-lg md:text-xl font-black mb-4 tracking-widest uppercase transition-all duration-700"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
                fontFamily: "Impact, 'Arial Black', sans-serif",
              }}
            >
              Bienvenido a
            </p>

            <div
              className="mb-6 transition-all duration-700"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "0.15s",
              }}
            >
              <Image
                src="/ronnys-logo-design.png"
                alt="Ronny's Logo"
                width={400}
                height={130}
                priority
                className="drop-shadow-[0_0_25px_rgba(239,68,68,0.8)] w-full max-w-sm md:max-w-md"
              />
            </div>

            <p
              className="text-xl md:text-2xl text-yellow-400 mb-10 font-black tracking-tight transition-all duration-700"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "0.3s",
                fontFamily: "Impact, 'Arial Black', sans-serif",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              }}
            >
              Donde la Dulzura se Encuentra con la Diversión
            </p>

            <button
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-yellow-400 hover:bg-yellow-300 text-red-900 font-black text-xl md:text-2xl px-12 py-5 rounded-full shadow-[0_0_40px_rgba(255,215,0,0.7)] hover:shadow-[0_0_50px_rgba(255,215,0,0.9)] hover:scale-105 transition-all duration-300"
              style={{
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "0.45s",
                fontFamily: "Impact, 'Arial Black', sans-serif",
              }}
            >
              Ver Menú
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-yellow-400/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-yellow-400/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      <section id="menu" className="py-16 md:py-24 bg-red-700 relative">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Menu Header */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="bg-[#f5f0e8] rounded-2xl overflow-hidden border-4 border-black shadow-xl">
              <div className="h-6 flex">
                {[...Array(30)].map((_, i) => (
                  <div key={i} className={`flex-1 ${i % 2 === 0 ? "bg-black" : "bg-white"}`} />
                ))}
              </div>
              <div className="px-6 py-4 text-center">
                <h2
                  id="menu-title"
                  data-animate-title
                  className="text-4xl md:text-5xl font-black text-black transition-all duration-700"
                  style={{
                    fontFamily: "Brush Script MT, cursive",
                    opacity: visibleSections["menu-title"] ? 1 : 0,
                    transform: visibleSections["menu-title"] ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  Menú
                </h2>
              </div>
              <div className="h-6 flex">
                {[...Array(30)].map((_, i) => (
                  <div key={i} className={`flex-1 ${i % 2 === 0 ? "bg-black" : "bg-white"}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Promo Banner */}
          <div className="bg-gradient-to-r from-red-600 to-red-800 border-2 border-yellow-400 rounded-xl p-4 mb-10 max-w-2xl mx-auto shadow-lg">
            <p
              className="text-center text-yellow-400 font-black text-lg md:text-xl"
              style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
            >
              ⭐ 2 x $100 MXN en malteadas cada viernes ⭐
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 max-w-3xl mx-auto">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 md:px-6 py-2 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-yellow-400 text-red-900 shadow-lg scale-105"
                    : "bg-red-800 text-yellow-400 border border-yellow-400/50 hover:border-yellow-400"
                }`}
                style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#f5f0e8] rounded-xl overflow-hidden border-4 border-black shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Checkered top border */}
                <div className="h-4 flex">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className={`flex-1 ${i % 2 === 0 ? "bg-black" : "bg-white"}`} />
                  ))}
                </div>

                {/* Product Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 text-center bg-[#f5f0e8]">
                  <h3
                    className="text-2xl md:text-3xl font-black text-red-600 mb-3"
                    style={{
                      fontFamily: "Brush Script MT, cursive",
                      textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
                    }}
                  >
                    {item.title}
                  </h3>

                  {item.prices.map((price, i) => (
                    <p key={i} className="text-red-600 font-bold text-base md:text-lg">
                      {price}
                    </p>
                  ))}

                  {item.ingredients && <p className="text-gray-600 text-sm mt-3 leading-relaxed">{item.ingredients}</p>}
                </div>

                {/* Checkered bottom border */}
                <div className="h-4 flex">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className={`flex-1 ${i % 2 === 0 ? "bg-black" : "bg-white"}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-red-700">
        <div className="container mx-auto px-4">
          <h2
            id="testimonials-title"
            data-animate-title
            className="text-3xl md:text-4xl font-black text-yellow-400 text-center mb-12 tracking-tight transition-all duration-700"
            style={{
              fontFamily: "Impact, 'Arial Black', sans-serif",
              textShadow: "2px 2px 0 #000",
              opacity: visibleSections["testimonials-title"] ? 1 : 0,
              transform: visibleSections["testimonials-title"] ? "translateY(0)" : "translateY(20px)",
            }}
          >
            LO QUE DICEN NUESTROS CLIENTES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#f5f0e8] rounded-xl p-6 border-4 border-yellow-400 shadow-xl text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-red-600">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <h3
                  className="text-red-600 font-black text-xl mb-2"
                  style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
                >
                  {testimonial.name}
                </h3>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="ubicacion" className="py-16 md:py-20 bg-red-700">
        <div className="container mx-auto px-4">
          <h2
            id="ubicacion-title"
            data-animate-title
            className="text-3xl md:text-4xl font-black text-yellow-400 text-center mb-10 tracking-tight transition-all duration-700"
            style={{
              fontFamily: "Impact, 'Arial Black', sans-serif",
              textShadow: "2px 2px 0 #000",
              opacity: visibleSections["ubicacion-title"] ? 1 : 0,
              transform: visibleSections["ubicacion-title"] ? "translateY(0)" : "translateY(20px)",
            }}
          >
            ENCUÉNTRANOS
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-900 rounded-xl overflow-hidden border-4 border-yellow-400 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.0!2d-99.0!3d19.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDM2JzAwLjAiTiA5OcKwMDAnMDAuMCJX!5e0!3m2!1ses!2smx!4v1635000000000!5m2!1ses!2smx"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Ronny's Food Truck"
              />
              <div className="p-4 flex items-center justify-center gap-2 text-yellow-400">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">26 C. Nueva York, Ecatepec de Morelos, Estado de México</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section id="historia" className="py-16 md:py-20 bg-red-700">
        <div className="container mx-auto px-4">
          <h2
            id="historia-title"
            data-animate-title
            className="text-3xl md:text-4xl font-black text-yellow-400 text-center mb-10 tracking-tight transition-all duration-700"
            style={{
              fontFamily: "Impact, 'Arial Black', sans-serif",
              textShadow: "2px 2px 0 #000",
              opacity: visibleSections["historia-title"] ? 1 : 0,
              transform: visibleSections["historia-title"] ? "translateY(0)" : "translateY(20px)",
            }}
          >
            TODO EMPEZÓ...
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-[#f5f0e8] rounded-xl p-6 border-4 border-yellow-400 shadow-xl">
              <p className="text-gray-800 leading-relaxed text-lg">
                Desde pequeña, siempre me fascinó el mundo de la cocina. Pasaba horas jugando con mis juegos de
                comidita, imaginando sabores, colores y combinaciones que algún día podría crear de verdad.
              </p>
            </div>

            <div className="bg-[#f5f0e8] rounded-xl p-6 border-4 border-yellow-400 shadow-xl">
              <p className="text-gray-800 leading-relaxed text-lg">
                Esa pasión fue el punto de partida de Ronny's, nuestro food truck sobre ruedas, un sueño hecho realidad
                gracias al apoyo incondicional de mis padres, Christopher Jiménez y Marlene Espinosa.
              </p>
            </div>

            <div className="bg-[#f5f0e8] rounded-xl p-6 border-4 border-yellow-400 shadow-xl">
              <p className="text-gray-800 leading-relaxed text-lg">
                Hoy, Ronny's no solo representa mi amor por la cocina, sino también el esfuerzo, la unión y la
                dedicación de nuestra familia. Cada platillo que servimos lleva un pedacito de esa historia.
              </p>
            </div>

            <div className="bg-[#f5f0e8] rounded-xl p-6 border-4 border-yellow-400 shadow-xl text-center">
              <p className="text-gray-800 leading-relaxed text-lg mb-4">
                El nombre viene de Ronny, nuestro pequeño chihuahua — la mascota de la familia y ahora la cara de este
                dulce sueño sobre ruedas.
              </p>
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-red-600 shadow-lg">
                <Image
                  src="/chihuahua-ronny.png"
                  alt="Ronny el Chihuahua"
                  width={160}
                  height={160}
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promociones Section */}
      <section id="promociones" className="py-16 md:py-20 bg-red-700">
        <div className="container mx-auto px-4">
          <h2
            id="promo-title"
            data-animate-title
            className="text-3xl md:text-4xl font-black text-yellow-400 text-center mb-10 tracking-tight transition-all duration-700"
            style={{
              fontFamily: "Impact, 'Arial Black', sans-serif",
              textShadow: "2px 2px 0 #000",
              opacity: visibleSections["promo-title"] ? 1 : 0,
              transform: visibleSections["promo-title"] ? "translateY(0)" : "translateY(20px)",
            }}
          >
            PROMOCIONES
          </h2>

          <div className="max-w-md mx-auto">
            <div
              className="rounded-xl overflow-hidden border-4 border-yellow-400 shadow-xl"
              style={{ aspectRatio: "9/16" }}
            >
              <iframe
                src="https://www.youtube.com/embed/HKpJcQ4-KEc?autoplay=1&mute=1&loop=1&playlist=HKpJcQ4-KEc&controls=1"
                title="Promoción Ronny's"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 border-t-4 border-yellow-400">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <Image src="/ronny-logo.png" alt="Ronny Logo" width={50} height={50} loading="lazy" />
                <Image src="/ronnys-logo-design.png" alt="Ronny's" width={120} height={40} loading="lazy" />
              </div>
              <p className="text-yellow-400 text-sm">Dulzura sobre ruedas</p>
            </div>

            {/* Menu */}
            <div className="text-center">
              <h3
                className="text-yellow-400 font-black text-lg mb-3"
                style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
              >
                Menú
              </h3>
              <nav className="flex flex-col gap-2">
                {["Inicio", "Historia", "Menú", "Ubicación"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace("ú", "u")}`}
                    className="text-white/80 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div className="text-center md:text-right">
              <h3
                className="text-yellow-400 font-black text-lg mb-3"
                style={{ fontFamily: "Impact, 'Arial Black', sans-serif" }}
              >
                Contacto
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-white/80 flex items-center justify-center md:justify-end gap-2">
                  <Mail className="w-4 h-4" /> roonysfoodtruck04@gmail.com
                </p>
                <p className="text-white/80 flex items-center justify-center md:justify-end gap-2">
                  <Phone className="w-4 h-4" /> 5652346248
                </p>
                <p className="text-yellow-400 text-xs mt-2">V-D: 6:00 PM - 11:00 PM</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-6">
            <a
              href="https://www.instagram.com/ronnystruck04/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61578442170631"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@ronnystruck04"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform border border-white/20"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.07 6.81 6.81 0 1 0 6.82 6.87v-3.19a4.82 4.82 0 0 0 3.83 1.76v-3.45a4.81 4.81 0 0 1-3.66-1.84z" />
              </svg>
            </a>
            <a
              href="https://x.com/ronnystruck04"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="https://wa.me/525652346248"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-white/60 text-sm">© 2025 Ronny Food Truck. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-yellow-400 text-red-900 rounded-full shadow-lg hover:bg-yellow-300 hover:scale-110 transition-all flex items-center justify-center z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
