function ProjectIdentityVisual({ project }) {
  if (project.visualType === 'weekflow') {
    return <div className="weekflow-project-visual">
      <div className="weekflow-project-brand"><img src={project.logo} alt="WeekFlow logo" /><strong>{project.name}</strong></div>
      <img className="weekflow-project-screenshot" src={project.image} alt={project.imageAlt || `${project.name} homepage screenshot`} />
    </div>
  }

  if (project.logo) return <img className="project-card-image project-logo" src={project.logo} alt={`${project.name} logo`} />

  return <div className="research-identity" role="img" aria-label={`${project.name} research project identity`}><span>Research / data collection</span><strong>{project.name}</strong><i aria-hidden="true">96</i></div>
}

export default ProjectIdentityVisual
