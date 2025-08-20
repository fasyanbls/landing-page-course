import React from 'react'
import heroImg from '../assets/linkedin.png'

export default function Hero() {
  return (
    <section id="hero" className="section hero" data-reveal>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Online Class</p>
          <h1 className="title">Mastering LinkedIn for Career Growth</h1>
          <p className="subtitle">
            Optimize your profile, build a powerful network, and unlock real opportunities
            with practical steps you can apply in one week.
          </p>
          <div className="hero-cta">
            <a href="#register" className="btn btn-cta btn-lg">Daftar Sekarang</a>
            <a href="#about" className="btn btn-ghost">Pelajari Lebih Lanjut</a>
          </div>

          <ul className="feature-strip" aria-label="Highlights">
            <li>Live Session</li>
            <li>Real Case Studies</li>
            <li>Template & Checklist</li>
          </ul>
        </div>

        <div className="hero-art">
          <img src={heroImg} alt="People networking and building connections" />
        </div>
      </div>
    </section>
  )
}
