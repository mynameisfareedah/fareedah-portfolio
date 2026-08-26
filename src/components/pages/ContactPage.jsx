import { useState } from 'react'
import { Link } from 'react-router-dom'

function ContactDetail({ label, children }) {
  return <div className="contact-detail"><p className="eyebrow">{label}</p>{children}</div>
}

function ContactPage({ content }) {
  const [status, setStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (!event.currentTarget.checkValidity()) {
      setStatus('Please complete all required fields.')
      event.currentTarget.reportValidity()
      return
    }
    setStatus('Your message is prepared. This form is not connected to a sending service yet.')
    event.currentTarget.reset()
  }

  return <div className="contact-page">
    <section className="section-pad contact-intro"><div className="shell contact-intro-grid"><div><p className="eyebrow">{content.eyebrow}</p><h1>{content.heading}</h1></div><p className="contact-lede">{content.text}</p></div></section>
    <section className="section-pad contact-main"><div className="shell contact-grid"><div className="contact-details"><p className="eyebrow">Contact details</p><ContactDetail label="Phone"><div className="contact-links">{content.details.phones.map((phone) => <a key={phone} href={`tel:${phone}`}>{phone}</a>)}</div></ContactDetail><ContactDetail label="Email"><div className="contact-links">{content.details.emails.map((email) => <a key={email} href={`mailto:${email}`}>{email}</a>)}</div></ContactDetail><ContactDetail label="Location"><p>{content.details.location}</p></ContactDetail></div><form className="contact-form" onSubmit={handleSubmit} noValidate><div className="form-field"><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" type="text" autoComplete="name" required /></div><div className="form-field"><label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" required /></div><div className="form-field"><label htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" type="text" required /></div><div className="form-field"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows="6" required /></div><button className="button" type="submit">Prepare Message <span aria-hidden="true">↗</span></button><p className="form-status" role="status" aria-live="polite">{status}</p></form></div></section>
    <section className="section-pad contact-availability"><div className="shell contact-availability-grid"><p className="eyebrow">Based in Lagos</p><div><h2>Open to relevant conversations.</h2><p>Based in Lagos, Nigeria and open to professional conversations, collaborations, digital projects, technology work, and systems-related opportunities.</p><div className="contact-socials">{content.socials.map((social) => <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer">{social.label} <span aria-hidden="true">↗</span></a>)}</div></div></div></section>
    <section className="section-pad contact-cta"><div className="shell"><p className="eyebrow">Continue exploring</p><h2>See more of the work and practice.</h2><div className="hero-actions"><Link className="button" to="/projects">View Projects <span aria-hidden="true">↗</span></Link><Link className="text-link" to="/experience">View Experience <span aria-hidden="true">↗</span></Link></div></div></section>
  </div>
}

export default ContactPage
