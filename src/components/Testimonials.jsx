import React from 'react'
import u1 from '../assets/user1.jpg'
import u2 from '../assets/user2.jpg'
import u3 from '../assets/user3.jpg'

const testimonials = [
  { name: 'Alya — HR Intern', text: 'Dari nggak pede sama profil, jadi dapet 3 interview dalam 2 minggu. Step-by-step-nya gampang diikuti!', img: u1 },
  { name: 'Rafi — Fresh Graduate', text: 'Headline & About baru bikin profile views naik 4x. Template outreach-nya membantu banget.', img: u2 },
  { name: 'Nadya — UI/UX Enthusiast', text: 'Kelasnya ringkas tapi daging semua. Sekarang koneksi sama mentor dan hiring manager jadi natural.', img: u3 },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials" data-reveal>
      <div className="container">
        <h2 className="section-title">What Alumni Say</h2>
        <div className="grid">
          {testimonials.map((t, i) => (
            <figure key={i} className="card quote">
              <img src={t.img} alt={t.name} className="avatar" />
              <blockquote>“{t.text}”</blockquote>
              <figcaption>— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
