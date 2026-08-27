import Navbar from '../navigation/Navbar.jsx'
import Footer from '../sections/Footer.jsx'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const spaceStars = Array.from({ length: 30 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  top: `${(index * 61) % 100}%`,
  size: `${1 + (index % 3) * 0.45}px`,
  duration: `${18 + (index % 7) * 4}s`,
  delay: `-${(index * 2.7) % 25}s`,
}))

const driftingStars = Array.from({ length: 10 }, (_, index) => ({
  left: `${(index * 47 + 8) % 100}%`,
  top: `${(index * 29 + 4) % 100}%`,
  duration: `${12 + (index % 5) * 3}s`,
  delay: `-${((index + 1) * 1.8) % 15}s`,
}))

const shootingStars = Array.from({ length: 10 }, (_, index) => ({
  left: `${8 + (index * 23) % 84}%`,
  top: `${4 + (index * 17) % 52}%`,
  duration: `${2.2 + (index % 4) * 0.55}s`,
  delay: `-${((index + 1) * 2.1) % 8}s`,
  angle: index % 2 === 0 ? '34deg' : '146deg',
}))

function SpaceScene() {
  return <div className="space-scene" aria-hidden="true">
    <div className="space-stars space-stars-distant">{spaceStars.map((star, index) => <i key={`distant-${index}`} style={{ '--star-left': star.left, '--star-top': star.top, '--star-size': star.size, '--star-duration': star.duration, '--star-delay': star.delay }} />)}</div>
    <div className="space-stars space-stars-drifting">{driftingStars.map((star, index) => <i key={`drifting-${index}`} style={{ '--star-left': star.left, '--star-top': star.top, '--star-duration': star.duration, '--star-delay': star.delay }} />)}</div>
    <div className="space-meteors">{shootingStars.map((meteor, index) => <i key={`meteor-${index}`} style={{ '--meteor-left': meteor.left, '--meteor-top': meteor.top, '--meteor-duration': meteor.duration, '--meteor-delay': meteor.delay, '--meteor-angle': meteor.angle }} />)}</div>
    <div className="space-orbit space-orbit-one" />
    <div className="space-orbit space-orbit-two" />
  </div>
}

function SiteShell({ content, children }) {
  const location = useLocation()

  useEffect(() => {
    const titles = {
      '/': 'Fareedah Hussain | Full-Stack Developer & Digital Technology Specialist',
      '/about': 'About | Fareedah Hussain',
      '/experience': 'Experience | Fareedah Hussain',
      '/projects': 'Projects | Fareedah Hussain',
      '/skills': 'Skills | Fareedah Hussain',
      '/contact': 'Contact | Fareedah Hussain',
      '/creative-work': 'Graphic Design & Creative Work | Fareedah Hussain',
    }
    const project = content.projects.items.find((item) => location.pathname === `/projects/${item.slug}`)
    document.title = project ? `${project.name} | Fareedah Hussain` : titles[location.pathname] || 'Fareedah Hussain | Portfolio'
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', project?.description || content.seo.pages[location.pathname] || content.seo.defaultDescription)
  }, [content.projects.items, content.seo.defaultDescription, content.seo.pages, location.pathname])

  return (
    <div className="site-frame">
      <SpaceScene />
      <Navbar content={content} />
      <main key={location.pathname}>{children}</main>
      <Footer content={content} />
    </div>
  )
}

export default SiteShell
