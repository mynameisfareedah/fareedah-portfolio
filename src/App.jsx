import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import SiteShell from './components/layout/SiteShell.jsx'
import AboutPage from './components/pages/AboutPage.jsx'
import ContactPage from './components/pages/ContactPage.jsx'
import CreativeWorkPage from './components/pages/CreativeWorkPage.jsx'
import ExperiencePage from './components/pages/ExperiencePage.jsx'
import ProjectsPage from './components/pages/ProjectsPage.jsx'
import ProjectCaseStudyPage from './components/pages/ProjectCaseStudyPage.jsx'
import SkillsPage from './components/pages/SkillsPage.jsx'
import ScrollToTop from './components/navigation/ScrollToTop.jsx'
import ExperiencePreview from './components/sections/ExperiencePreview.jsx'
import ExpertiseStrip from './components/sections/ExpertiseStrip.jsx'
import FeaturedProjects from './components/sections/FeaturedProjects.jsx'
import FinalCTA from './components/sections/FinalCTA.jsx'
import Hero from './components/sections/Hero.jsx'
import { siteContent } from './content/site.js'
import './index.css'

function HomePage() {
  const creativeItems = siteContent.creativeWork.items.filter((item) => item.featured).slice(0, 3)

  return (
    <div className="home-page"><Hero content={{ ...siteContent.hero, title: 'FULL-STACK DEVELOPMENT · DIGITAL SYSTEMS · DATA', heading: 'I build digital experiences, systems and solutions that make work better.', text: 'I combine technology, digital operations and data to create practical solutions that help people and organisations work better.', profileImage: siteContent.identity.profileImage }} /><ExpertiseStrip items={siteContent.expertise} /><section className="home-positioning section-pad"><div className="shell home-positioning-inner"><p className="eyebrow">01 / The practice</p><h2>Technology with purpose.</h2><p>I work across digital experiences, systems, operations and data — bringing technical thinking and practical problem-solving together to create work that is useful, clear and sustainable.</p><span className="home-orbit" aria-hidden="true" /></div></section><section className="home-practice section-pad"><div className="shell home-practice-inner"><div><p className="eyebrow">02 / A multidisciplinary practice</p><h2>Many perspectives. One connected practice.</h2></div><div className="home-practice-copy"><p>I bring together technical thinking, operational awareness and visual clarity to help people and organisations work better.</p><Link className="text-link" to="/skills">Explore my capabilities <span aria-hidden="true">↗</span></Link></div></div></section><FeaturedProjects projects={siteContent.projects.items} /><section className="beyond-code section-pad"><div className="shell"><div className="beyond-code-copy"><p className="eyebrow">03 / Beyond the interface</p><h2>Visual communication is part of useful digital work.</h2><p>I also create visual materials that help ideas, initiatives and information connect with people.</p><Link className="text-link" to="/creative-work">Explore Creative Work <span aria-hidden="true">↗</span></Link></div><div className="home-creative-preview">{creativeItems.map((item) => <img key={item.id} src={item.image} alt={item.alt} loading="lazy" decoding="async" />)}</div></div></section><ExperiencePreview experience={siteContent.experience} /><FinalCTA content={siteContent.contact} /></div>
  )
}

function PlaceholderPage({ title }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <p className="eyebrow">Portfolio</p>
      <h1 className="mt-4 font-display text-5xl text-[var(--color-ink)]">{title}</h1>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteShell content={siteContent}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage content={{ ...siteContent.about, capabilities: siteContent.capabilities }} />} />
          <Route path="/experience" element={<ExperiencePage content={{ ...siteContent.experience, capabilities: siteContent.capabilities }} />} />
          <Route path="/skills" element={<SkillsPage content={{ ...siteContent.skills, creativeWork: siteContent.creativeWork }} />} />
          <Route path="/contact" element={<ContactPage content={siteContent.contact} />} />
          <Route path="/creative-work" element={<CreativeWorkPage content={siteContent.creativeWork} />} />
          <Route path="/projects" element={<ProjectsPage content={siteContent.projects} />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudyPage projects={siteContent.projects.items} />} />
          <Route path="*" element={<PlaceholderPage title="Page not found" />} />
        </Routes>
      </SiteShell>
    </BrowserRouter>
  )
}

export default App
