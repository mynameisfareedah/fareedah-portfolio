import { Link } from 'react-router-dom'

function ProjectVisual({ project, index }) {
  return <div className={`projects-visual projects-visual-${(index % 2) + 1}`} aria-hidden={project.image ? undefined : 'true'}>
    <span className="project-count">{String(index + 1).padStart(2, '0')}</span>
    {project.image ? <img className="project-card-image project-logo" src={project.image} alt={`${project.name} logo`} /> : <div className="projects-placeholder"><strong>{project.category}</strong><span>Visual identity</span></div>}
  </div>
}

function ProjectCard({ project, index }) {
  return <article className="projects-card"><ProjectVisual project={project} index={index} /><div className="projects-card-content"><p className="eyebrow">{project.category}</p><h2>{project.name}</h2>{project.description && <p className="projects-description">{project.description}</p>}{project.role && <p className="projects-detail"><span>Role</span>{project.role}</p>}{project.technologies.length > 0 && <div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>}{project.highlights.length > 0 && <ul className="projects-highlights">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}<Link className="text-link" to={`/projects/${project.slug}`}>View Case Study <span aria-hidden="true">↗</span></Link></div></article>
}

function ProjectsPage({ content }) {
  return <div className="projects-page">
    <section className="section-pad projects-intro"><div className="shell projects-intro-grid"><div><p className="eyebrow">{content.intro.eyebrow}</p><h1>{content.intro.heading}</h1></div><p className="projects-lede">{content.intro.text}</p></div></section>
    <section className="section-pad projects-list"><div className="shell"><div className="section-heading section-heading-row"><div><p className="eyebrow">The portfolio</p><h2>Work with room for the details.</h2></div><span className="section-index">01 / {String(content.items.length).padStart(2, '0')}</span></div><div className="projects-grid">{content.items.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></div></section>
    <section className="creative-promo"><div className="shell creative-promo-inner"><div><p className="eyebrow">Additional capability</p><h2>Creative &amp; Graphic Design</h2><p>Selected visual communication, digital publication, outreach, event, and creative work.</p></div><Link className="text-link" to="/creative-work">View Creative Work <span aria-hidden="true">↗</span></Link></div></section>
    <section className="section-pad projects-cta"><div className="shell"><p className="eyebrow">Continue exploring</p><h2>See the wider practice.</h2><div className="hero-actions"><Link className="button" to="/experience">View Experience <span aria-hidden="true">↗</span></Link><Link className="text-link" to="/skills">Explore Skills <span aria-hidden="true">↗</span></Link><Link className="text-link" to="/contact">Get In Touch <span aria-hidden="true">↗</span></Link></div></div></section>
  </div>
}

export default ProjectsPage
