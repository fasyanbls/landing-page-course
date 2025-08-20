import React from 'react'
import aboutImg from '../assets/course.png'

export default function About() {
  return (
    <section id="about" className="section about" data-reveal>
      <div className="container about-grid">
        <div>
          <h2 className="section-title">About the Class</h2>
          <p className="body">
            <strong>Mastering LinkedIn for Career Growth</strong> is a focused, hands-on program
            designed to turn your LinkedIn profile into a magnet for recruiters and high-quality
            opportunities. In this class, you’ll learn how to craft a stand-out headline and
            About section, showcase projects and achievements that matter, and use search,
            keywords, and content consistently to get discovered. We’ll walk through a practical
            networking system, connecting with the right people, starting meaningful conversations,
            and following up without being awkward. You’ll also learn how to position your skills
            for different roles, leverage recommendations, and measure what works. By the end,
            you’ll have a polished profile, an outreach playbook, and clear next steps to grow your career.
          </p>
        </div>
        <div className="about-art">
          <img src={aboutImg} alt="Profile optimization illustration" />
        </div>
      </div>
    </section>
  )
}
