import { Link, useParams } from 'react-router-dom'

function ProjectVisual({ project }) {
  return <div className="case-visual">{project.image ? <img className="project-card-image project-logo" src={project.image} alt={project.imageAlt || `${project.name} logo`} /> : <div className="case-placeholder"><span>{project.category}</span><strong>Visual identity</strong></div>}</div>
}

function OptionalList({ label, items = [] }) {
  if (!items.length) return null
  return <section className="case-detail"><p className="eyebrow">{label}</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>
}

function OptionalText({ label, text, fullWidth = false }) {
  if (!text) return null
  return <section className={`case-detail${fullWidth || label === 'My role' ? ' case-detail-wide' : ''}`}><p className="eyebrow">{label}</p><p>{text}</p></section>
}

function ProjectStats({ stats }) {
  if (!stats?.length) return null
  return <section className="case-stats" aria-label="Project details">{stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</section>
}

function AnalysisAreas({ areas }) {
  if (!areas?.length) return null
  return <section className="case-analysis"><p className="eyebrow">Key analysis areas</p><div className="case-analysis-grid">{areas.map((area) => <article key={area.title}><h3>{area.title}</h3><ul>{area.findings.map((finding) => <li key={finding}>{finding}</li>)}</ul></article>)}</div></section>
}

function ProjectCaseStudyPage({ projects }) {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) return <section className="section-pad"><div className="shell"><p className="eyebrow">Project not found</p><h1>This project is not available.</h1><Link className="text-link" to="/projects">Back to Projects <span aria-hidden="true">↗</span></Link></div></section>

  return <div className="case-study-page"><section className="section-pad case-intro"><div className="shell"><Link className="back-link" to="/projects">← Back to Projects</Link><p className="eyebrow">{project.category}</p><h1>{project.name}</h1><p className="case-role">{project.role}</p>{project.tagline && <p className="case-tagline">{project.tagline}</p>}</div></section><section className="section-pad case-body"><div className="shell case-grid"><ProjectVisual project={project} /><div className="case-information"><OptionalText label="Project overview" text={project.description} fullWidth /><OptionalText label="The purpose" text={project.purpose} fullWidth /><OptionalText label="My role" text={project.contribution} /><OptionalList label="Questionnaire design" items={project.questionnaireDesign} /><OptionalList label="Digital data collection" items={project.dataCollection} /><OptionalList label="Data & analytics workflow" items={project.dataWorkflow} /><OptionalList label="Frontend development" items={project.frontend} /><OptionalList label="Backend development" items={project.backend} /><OptionalList label="Key features & functionality" items={project.features} /><OptionalList label="Technologies & tools" items={project.technologies} /><OptionalList label="Project highlights" items={project.highlights} /><OptionalText label="Project outcome / purpose" text={project.outcome} fullWidth /><OptionalText label="Research context" text={project.researchDescription} fullWidth />{project.link && <a className="button" href={project.link} target="_blank" rel="noopener noreferrer">Visit Live Project <span aria-hidden="true">↗</span></a>}</div></div><div className="shell case-extra"><ProjectStats stats={project.stats} /><OptionalText label="Study coverage" text={project.analysisNote} /><OptionalList label="Participating facilities" items={project.studyCoverage} /><AnalysisAreas areas={project.analysisAreas} /></div></section><section className="section-pad case-footer"><div className="shell"><p className="eyebrow">Related project</p><Link className="text-link" to="/projects">Back to all projects <span aria-hidden="true">↗</span></Link></div></section></div>
}

export default ProjectCaseStudyPage
