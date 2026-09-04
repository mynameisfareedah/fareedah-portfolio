import { Link } from 'react-router-dom'
import { useState } from 'react'
import ProjectIdentityVisual from '../projects/ProjectIdentityVisual.jsx'

function FeaturedProjects({ projects }) {
	const [activeIndex, setActiveIndex] = useState(0)
	const project = projects[activeIndex]

	return <section className="section-pad work" id="work"><div className="shell"><div className="section-heading section-heading-row"><div><p className="eyebrow">Selected work / book &amp; pages</p><h2>Projects grounded in purpose.</h2></div><span className="section-index">02 / {String(projects.length).padStart(2, '0')}</span></div><div className="project-book"><div key={project.slug} className={`project-book-visual project-art-${activeIndex + 1} visual-tone-${project.visualTone || 'default'}`}><span className="project-count">{String(activeIndex + 1).padStart(2, '0')}</span><div className="image-frame"><ProjectIdentityVisual project={project} /></div></div><div key={`${project.slug}-copy`} className="project-book-copy"><p className="eyebrow">{project.category}</p><h3>{project.name}</h3><p>{project.description}</p>{project.role && <p className="projects-detail"><span>Role</span>{project.role}</p>}{project.tags?.length > 0 && <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>}<Link className="text-link" to={`/projects/${project.slug}`}>View case study <span aria-hidden="true">↗</span></Link></div></div><div className="project-book-nav" aria-label="Selected projects">{projects.map((item, index) => <button type="button" className={index === activeIndex ? 'is-active' : ''} key={item.slug} onClick={() => setActiveIndex(index)}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item.name}</strong></button>)}</div></div></section>
}
export default FeaturedProjects
