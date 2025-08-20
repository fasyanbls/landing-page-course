import React from 'react'

const items = [
  { title: 'Profile that Gets Noticed', text: 'Craft a headline, summary, and experience that pass recruiter skims and keyword scans.', icon: 'rocket' },
  { title: 'Networking Playbook', text: 'Use proven scripts to connect, follow up, and build relationships without spamming.', icon: 'network' },
  { title: 'Job Search & Visibility', text: 'Understand how search works, when to post, and what to share to attract opportunities.', icon: 'search' },
  { title: 'Templates & Checklists', text: 'Get reusable templates for messages, profile sections, and weekly actions.', icon: 'checklist' }
]

function Icon({ name }){
  switch(name){
    case 'rocket': return (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19l4-1 7-7a4 4 0 10-3-3L6 15l-1 4z" stroke="currentColor" strokeWidth="1.6"/><path d="M15 9l-6 6" stroke="currentColor" strokeWidth="1.6"/></svg>)
    case 'network': return (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="1.6"/><circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.6"/><circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.6"/><path d="M8 12h6M16 7l-4 4m4 10l-4-6" stroke="currentColor" strokeWidth="1.6"/></svg>)
    case 'search': return (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6"/><path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.6"/></svg>)
    case 'checklist': return (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M8 9h4M8 13h8" stroke="currentColor" strokeWidth="1.6"/><path d="M7 13l1.5 1.5L11 12" stroke="currentColor" strokeWidth="1.6"/></svg>)
    default: return null
  }
}

export default function Benefits() {
  return (
    <section id="benefits" className="section benefits" data-reveal>
      <div className="container">
        <h2 className="section-title">Key Benefits</h2>
        <div className="grid">
          {items.map((it, idx) => (
            <div key={idx} className="card benefit-card">
              <div className="icon-wrap"><Icon name={it.icon} /></div>
              <h3 className="card-title">{it.title}</h3>
              <p className="card-text">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
