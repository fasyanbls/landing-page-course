import React, { useState } from 'react'
import faqImg from '../assets/faq.png'

const faqs = [
  { q: 'Apakah kelas ini cocok untuk pemula?', a: 'Iya. Materi disusun dari dasar (optimasi profil) sampai strategi networking dan konten.' },
  { q: 'Apakah ada rekaman?', a: 'Ya, peserta mendapatkan akses rekaman dan template yang digunakan saat kelas.' },
  { q: 'Bagaimana alur belajarnya?', a: 'Live session + tugas ringan + template siap pakai. Semua bisa diimplementasikan dalam 1 minggu.' },
  { q: 'Bagaimana cara mendaftar?', a: 'Klik tombol “Daftar Sekarang” di bagian atas atau bawah halaman, lalu isi form pendaftaran.' }
]

function Item({ q, a, defaultOpen=false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={"accordion " + (open ? 'open':'')}>
      <button className="accordion-trigger" aria-expanded={open} onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <span className="chev" aria-hidden="true">{open ? '−' : '+'}</span>
      </button>
      <div className="accordion-panel" role="region">
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="section faq" data-reveal>
      <div className="container faq-grid">
        <div>
          <h2 className="section-title">FAQ</h2>
          <div className="stack">
            {faqs.map((f, i) => (
              <Item key={i} q={f.q} a={f.a} defaultOpen={i===0} />
            ))}
          </div>
        </div>
        <div className="faq-art">
          <img src={faqImg} alt="Questions and answers illustration" />
        </div>
      </div>
    </section>
  )
}
