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
import Capabilities from './components/sections/Capabilities.jsx'
import ExperiencePreview from './components/sections/ExperiencePreview.jsx'
import ExpertiseStrip from './components/sections/ExpertiseStrip.jsx'
import FeaturedProjects from './components/sections/FeaturedProjects.jsx'
import FinalCTA from './components/sections/FinalCTA.jsx'
import Hero from './components/sections/Hero.jsx'
import { siteContent } from './content/site.js'
import './index.css'

function HomePage() {
  return (
    <><Hero content={{ ...siteContent.hero, title: siteContent.identity.title }} /><ExpertiseStrip items={siteContent.expertise} /><Capabilities items={siteContent.capabilities} /><FeaturedProjects projects={siteContent.projects.items} /><section className="beyond-code section-pad"><div className="shell beyond-code-inner"><p className="eyebrow">Beyond the code</p><h2>Visual communication is part of useful digital work.</h2><p>Digital work is not only about systems and interfaces. I also create visual communication materials that help ideas, initiatives, and information connect with people.</p><Link className="button" to="/creative-work">View Creative Work <span aria-hidden="true">↗</span></Link></div></section><ExperiencePreview experience={siteContent.experience} /><FinalCTA content={siteContent.contact} /></>
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
