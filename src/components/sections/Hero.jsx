import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const heroWords = ['BUILD', 'ANALYZE', 'DESIGN', 'TRANSFORM']

function Hero({ content }) {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setWordIndex((current) => (current + 1) % heroWords.length), 2800)
    return () => window.clearInterval(timer)
  }, [])

  return <section className="hero section-pad"><div className="shell hero-grid">
    <div className="hero-copy reveal"><p className="eyebrow">{content.eyebrow}</p><p className="hero-title">{content.title}</p><p className="hero-verbs" aria-live="polite"><strong key={heroWords[wordIndex]}>{heroWords[wordIndex]}</strong><i>/</i><span>{heroWords[(wordIndex + 1) % heroWords.length]}</span></p><h1>{content.heading}</h1><p className="hero-text">{content.text}</p><div className="hero-actions"><Link className="button" to="/projects">Explore My Work <span aria-hidden="true">↘</span></Link><Link className="text-link" to="/contact">Let&apos;s Work Together <span aria-hidden="true">↗</span></Link><a className="text-link resume-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="View Fareedah Hussain resume">View Resume <span aria-hidden="true">↗</span></a></div></div>
    <div className="hero-visual hero-portrait-visual reveal reveal-delay"><div className="hero-image-wrap"><img src={content.profileImage} alt="Portrait of Fareedah Hussain, Full-Stack Developer and Digital Technology & Operations Specialist" /></div><div className="hero-abstract" aria-hidden="true" /><div className="hero-note"><span>Based in Lagos, Nigeria</span><strong>Technology that supports people and progress.</strong></div></div>
  </div></section>
}
export default Hero
