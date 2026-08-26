import { Link } from 'react-router-dom'

function AboutPage({ content }) {
  return (
    <div className="about-page">
      <section className="section-pad about-intro"><div className="shell about-intro-grid"><div><p className="eyebrow">{content.eyebrow}</p><h1>{content.heading}</h1></div><p className="about-lede">{content.introduction}</p></div></section>
      <section className="section-pad about-story"><div className="shell about-story-grid"><p className="eyebrow">The bigger picture</p><div><h2>A multidisciplinary approach to useful digital work.</h2><p>{content.story}</p></div></div></section>
      <section className="section-pad about-capabilities"><div className="shell"><div className="section-heading"><p className="eyebrow">What I bring</p><h2>Different disciplines, one connected practice.</h2></div><div className="about-capability-grid">{content.capabilities.map((item) => <article className="about-capability" key={item.title}><span className="number">{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
      <section className="section-pad about-approach"><div className="shell approach-grid"><div><p className="eyebrow">How I work</p><h2>Thoughtful from first question to final detail.</h2></div><ol className="approach-list">{content.approach.map((step, index) => <li key={step}><span className="number">0{index + 1}</span><strong>{step}</strong></li>)}</ol></div></section>
      <section className="section-pad profile-section"><div className="shell profile-card"><img className="profile-image" src={content.profile.image} alt={`${content.profile.name} - ${content.profile.title}`} loading="lazy" decoding="async" /><div className="profile-copy"><p className="eyebrow">Professional profile</p><h2>{content.profile.name}</h2><p className="profile-title">{content.profile.title}</p><p>{content.profile.description}</p>{content.profile.education && <p className="profile-education"><span>Education</span>{content.profile.education}</p>}</div></div></section>
      <section className="about-cta section-pad"><div className="shell"><p className="eyebrow">Continue exploring</p><h2>Let&apos;s build something useful.</h2><p>{content.cta}</p><div className="hero-actions"><Link className="button" to="/#work">View My Work <span aria-hidden="true">↘</span></Link><Link className="text-link" to="/#contact">Get In Touch <span aria-hidden="true">↗</span></Link></div></div></section>
    </div>
  )
}

export default AboutPage
