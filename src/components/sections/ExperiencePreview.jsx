import { Link } from 'react-router-dom'

function ExperiencePreview({ experience }) { const item = experience.roles[0]; return <section className="section-pad experience"><div className="shell experience-grid"><div><p className="eyebrow">04 / Experience</p><h2>Where technology meets the real world.</h2></div><div className="experience-item"><span className="number">01</span><h3>{item.organisation}</h3><p className="role-title">ICT · Digital Operations · Digital Systems</p><p className="muted">Supporting digital systems, technology platforms and organisational operations through practical workflows.</p><Link className="text-link" to="/experience">Explore experience <span aria-hidden="true">↗</span></Link></div></div></section> }
export default ExperiencePreview
