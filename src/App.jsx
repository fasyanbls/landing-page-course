import React, { useEffect } from 'react'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Benefits from './components/Benefits.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-in')
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <header className="site-header">
        <a href="#hero" className="brand">
          <span className="brand-logo" aria-hidden="true">in</span>
          BelajarLinkedIn
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#benefits">Benefits</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a href="#register" className="btn btn-cta">Daftar Sekarang</a>
      </header>

      <main>
        <Hero />
        <About />
        <Benefits />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
    </>
  )
}
