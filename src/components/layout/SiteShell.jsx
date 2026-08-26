import Navbar from '../navigation/Navbar.jsx'
import Footer from '../sections/Footer.jsx'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function SiteShell({ content, children }) {
  const location = useLocation()

  useEffect(() => {
    const titles = {
      '/': 'Fareedah Hussain-Yusuf | Full-Stack Developer & Digital Technology Specialist',
      '/about': 'About | Fareedah Hussain-Yusuf',
      '/experience': 'Experience | Fareedah Hussain-Yusuf',
      '/projects': 'Projects | Fareedah Hussain-Yusuf',
      '/skills': 'Skills | Fareedah Hussain-Yusuf',
      '/contact': 'Contact | Fareedah Hussain-Yusuf',
      '/creative-work': 'Graphic Design & Creative Work | Fareedah Hussain-Yusuf',
    }
    const project = content.projects.items.find((item) => location.pathname === `/projects/${item.slug}`)
    document.title = project ? `${project.name} | Fareedah Hussain-Yusuf` : titles[location.pathname] || 'Fareedah Hussain-Yusuf | Portfolio'
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', project?.description || content.seo.pages[location.pathname] || content.seo.defaultDescription)
  }, [content.projects.items, content.seo.defaultDescription, content.seo.pages, location.pathname])

  return (
    <div className="site-frame">
      <Navbar content={content} />
      <main>{children}</main>
      <Footer content={content} />
    </div>
  )
}

export default SiteShell
