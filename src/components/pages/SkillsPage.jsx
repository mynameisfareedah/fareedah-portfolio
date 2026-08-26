import { Link } from 'react-router-dom'

function SkillGroup({ group }) {
  return <article className="skill-group"><div className="skill-group-heading"><span className="number">{group.number}</span><h2>{group.title}</h2></div><p>{group.description}</p><ul className="skill-list">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>
}

function SkillsPage({ content }) {
  const toolsGroup = content.groups.find((group) => group.title === 'Digital Tools & Platforms')
  const creativeItems = content.creativeWork.items.filter((item) => item.featured).slice(0, 4)

  return <div className="skills-page">
    <section className="section-pad skills-intro"><div className="shell skills-intro-grid"><div><p className="eyebrow">{content.intro.eyebrow}</p><h1>{content.intro.heading}</h1></div><p className="skills-lede">{content.intro.text}</p></div></section>
    <section className="section-pad skills-groups"><div className="shell"><div className="section-heading"><p className="eyebrow">Core skill areas</p><h2>A connected foundation for digital work.</h2></div><div className="skill-groups-grid">{content.groups.map((group) => <SkillGroup key={group.number} group={group} />)}</div></div></section>
    <section className="section-pad technical-foundation"><div className="shell"><div className="section-heading"><p className="eyebrow">Technical foundation</p><h2>From interface to information flow.</h2></div><div className="foundation-grid">{content.foundation.map((item) => <div className="foundation-item" key={item.label}><span className="number">{item.label}</span><p>{item.detail}</p></div>)}</div></div></section>
    <section className="section-pad tools-section"><div className="shell tools-grid"><div><p className="eyebrow">Tools & platforms</p><h2>Tools used in context.</h2></div><div><p className="tools-description">{toolsGroup.description}</p><ul className="tools-list">{toolsGroup.skills.map((tool) => <li key={tool}>{tool}</li>)}</ul></div></div></section>
    <section className="section-pad skills-approach"><div className="shell skills-approach-grid"><p className="eyebrow">How I work</p><p>{content.approach}</p></div></section>
    <section className="section-pad skills-creative"><div className="shell"><div className="skills-creative-heading"><div><p className="eyebrow">Creative work</p><h2>Designing beyond the code.</h2><p>My digital work also includes graphic design, visual communication, educational materials, event materials, promotional content, and other creative assets developed for different projects and initiatives.</p></div><Link className="text-link" to="/creative-work">View Creative Work <span aria-hidden="true">↗</span></Link></div>{creativeItems.length > 0 && <div className="skills-creative-preview">{creativeItems.map((item) => <Link className="skills-creative-item" to="/creative-work" key={item.id}><img src={item.image} alt={item.alt} /><span>{item.title}</span></Link>)}</div>}</div></section>
    <section className="section-pad skills-cta"><div className="shell"><p className="eyebrow">Continue exploring</p><h2>Capability is shaped by the work around it.</h2><div className="hero-actions"><Link className="button" to="/projects">View Projects <span aria-hidden="true">↗</span></Link><Link className="text-link" to="/experience">View Experience <span aria-hidden="true">↗</span></Link><Link className="text-link" to="/contact">Get In Touch <span aria-hidden="true">↗</span></Link></div></div></section>
  </div>
}

export default SkillsPage
