import { useState } from 'react'
import { Link } from 'react-router-dom'

const rootPaths = ['M500 420 C430 450 315 460 130 500', 'M500 425 C450 470 390 495 280 520', 'M500 428 C500 475 500 510 500 535', 'M500 425 C550 470 610 495 720 520', 'M500 420 C570 450 685 460 870 500']

function TreeBranch({ group, index, activeBranch, setActiveBranch, activeSkill, setActiveSkill }) {
  const isActive = activeBranch === group.number
  return <section className={`botanical-branch botanical-branch-${index} ${isActive ? 'is-active' : ''} ${activeBranch && !isActive ? 'is-dimmed' : ''}`}>
    <button className="botanical-branch-label" type="button" aria-expanded={isActive} aria-controls={`leaves-${group.number}`} onClick={() => setActiveBranch(isActive ? null : group.number)} onMouseEnter={() => setActiveBranch(group.number)}><span className="branch-label-number">{group.number}</span><span>{group.title}</span><b aria-hidden="true">{isActive ? '−' : '+'}</b></button>
    <div id={`leaves-${group.number}`} className={`botanical-leaves ${isActive ? 'is-open' : ''}`} hidden={!isActive}>
      {group.skills.map((skill, skillIndex) => <button className={`leaf ${skillIndex % 2 === 0 ? 'leaf-offset-a' : 'leaf-offset-b'} ${activeSkill === skill ? 'is-selected' : ''}`} type="button" key={skill} onClick={() => setActiveSkill(skill)}>{skill}<i aria-hidden="true" /></button>)}
    </div>
  </section>
}

function SkillsPage({ content }) {
  const [activeBranch, setActiveBranch] = useState(null)
  const [activeSkill, setActiveSkill] = useState(null)
  const branches = content.groups

  return <div className="skills-page botanical-page">
    <section className="section-pad skills-intro"><div className="shell skills-intro-grid"><div><p className="eyebrow">{content.intro.eyebrow}</p><h1>{content.intro.heading}</h1></div><p className="skills-lede">{content.intro.text}</p></div></section>
    <section className="section-pad botanical-section"><div className="shell"><div className="botanical-heading"><div><p className="eyebrow">Explore my capabilities</p><h2>A living system of technology, data, and creative practice.</h2></div><p>Click a branch to reveal its leaves.</p></div><div className="botanical-tree"><svg className="botanical-art" viewBox="0 0 1000 570" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><path className="ground-line" d="M72 538 C270 525 730 525 928 538" /><g className="tree-roots">{rootPaths.map((path) => <path key={path} d={path} />)}</g><path className="tree-trunk" d="M465 530 C480 465 475 410 485 360 C490 330 475 260 490 195 L510 195 C525 260 510 330 515 360 C525 410 520 465 535 530 Z" /><g className="tree-branches"><path d="M500 395 C470 335 385 300 105 220" /><path d="M500 380 C470 315 405 260 265 155" /><path d="M500 360 C500 285 500 205 500 92" /><path d="M500 380 C530 315 595 260 735 155" /><path d="M500 395 C530 335 615 300 895 220" /><path d="M500 405 C540 385 680 365 870 345" /></g><g className="tree-twigs"><path d="M420 302C360 270 290 245 230 205M350 270C300 220 260 175 225 125M500 255V145M500 190C550 145 580 112 605 75M580 285C660 255 730 240 790 205M650 270C700 220 750 175 785 125M625 385C700 365 760 350 820 335" /></g><g className="tree-canopy">{Array.from({ length: 18 }, (_, index) => <circle key={index} cx={145 + (index * 83) % 720} cy={72 + (index * 47) % 105} r={8 + index % 4} />)}</g></svg><div className="tree-trunk-label"><strong>FAREEDAH HUSSAIN</strong><span>DIGITAL SYSTEMS • TECHNOLOGY • DATA • CREATIVE</span></div><div className="tree-root-labels">{content.roots.map((root, index) => <span className={`root-label root-label-${index}`} key={root}>{root}</span>)}</div><div className="botanical-branches">{branches.map((group, index) => <TreeBranch key={group.number} group={group} index={index} activeBranch={activeBranch} setActiveBranch={setActiveBranch} activeSkill={activeSkill} setActiveSkill={setActiveSkill} />)}</div></div><p className="tree-instruction">Explore the branches of my professional toolkit.</p><div className="tree-legend"><span><i className="legend-root" /> Roots / foundation</span><span><i className="legend-branch" /> Branches / capability areas</span><span><i className="legend-leaf" /> Leaves / individual skills</span></div>{activeSkill && <p className="skill-context" role="status">{activeSkill} is part of Fareedah&apos;s professional capability set.</p>}</div></section>
    <section className="section-pad skills-approach"><div className="shell skills-approach-grid"><p className="eyebrow">How I work</p><p>{content.approach}</p></div></section>
    <section className="section-pad skills-cta"><div className="shell"><p className="eyebrow">Continue exploring</p><h2>Capability is shaped by the work around it.</h2><div className="hero-actions"><Link className="button" to="/projects">See My Work <span aria-hidden="true">↗</span></Link><Link className="text-link" to="/experience">View My Experience <span aria-hidden="true">↗</span></Link><Link className="text-link" to="/contact">Let&apos;s Work Together <span aria-hidden="true">↗</span></Link></div></div></section>
  </div>
}

export default SkillsPage
