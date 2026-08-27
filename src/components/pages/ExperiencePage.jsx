import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function DetailList({ label, items }) {
  if (!items.length) return null
  return <div className="experience-detail"><p className="eyebrow">{label}</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>
}

function ExperiencePage({ content }) {
  const timelineRef = useRef(null)
  const [timelineVisible, setTimelineVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimelineVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.15 })
    if (timelineRef.current) observer.observe(timelineRef.current)
    return () => observer.disconnect()
  }, [])

  return <div className="experience-page">
    <section className="section-pad experience-intro"><div className="shell experience-intro-grid"><div><p className="eyebrow">{content.intro.eyebrow}</p><h1>{content.intro.heading}</h1></div><p className="experience-lede">{content.intro.text}</p></div></section>
    <section className="experience-timeline-section section-pad"><div className="shell"><div className="section-heading"><p className="eyebrow">Career timeline</p><h2>Professional experience, kept clear and grounded.</h2></div><div className={`experience-timeline ${timelineVisible ? 'is-visible' : ''}`} ref={timelineRef}>{content.roles.map((role, index) => <article className="timeline-role" key={`${role.organisation}-${index}`}><div className="timeline-meta"><span className="number">0{index + 1}</span>{role.dates && <span>{role.dates}</span>}</div><div className="timeline-marker" aria-hidden="true" /><div className="timeline-content">{role.location && <p className="eyebrow">{role.location}</p>}<h3>{role.organisation}</h3>{role.title && <p className="role-title">{role.title}</p>}{role.description && <p className="role-description">{role.description}</p>}<DetailList label="Responsibilities" items={role.responsibilities} /><DetailList label="Technologies & tools" items={role.technologies} /><DetailList label="Achievements" items={role.achievements} /></div></article>)}</div></div></section>
    <section className="experience-approach section-pad"><div className="shell experience-approach-grid"><div><p className="eyebrow">Professional approach</p><h2>Technology is most useful when it fits the work around it.</h2></div><p>{content.approach}</p></div></section>
    <section className="experience-capabilities section-pad"><div className="shell"><div className="section-heading"><p className="eyebrow">The connection</p><h2>Experience that crosses disciplines.</h2></div><div className="experience-capability-grid">{content.capabilities.map((item) => <article key={item.title}><span className="number">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
    <section className="experience-cta section-pad"><div className="shell"><p className="eyebrow">Continue exploring</p><h2>See the work behind the practice.</h2><div className="hero-actions"><Link className="button" to="/projects">View Projects <span aria-hidden="true">↗</span></Link><Link className="text-link" to="/skills">Explore Skills <span aria-hidden="true">↗</span></Link><Link className="text-link" to="/contact">Get In Touch <span aria-hidden="true">↗</span></Link></div></div></section>
  </div>
}

export default ExperiencePage
