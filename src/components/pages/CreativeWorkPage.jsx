import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function DesignViewer({ item, onClose }) {
  const closeButton = useRef(null)

  useEffect(() => {
    closeButton.current?.focus()
    const handleKeyDown = (event) => { if (event.key === 'Escape') onClose() }
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', handleKeyDown) }
  }, [onClose])

  return <div className="design-viewer" role="dialog" aria-modal="true" aria-labelledby="design-viewer-title" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}><div className="design-viewer-panel"><button className="viewer-close" type="button" ref={closeButton} onClick={onClose}><span className="sr-only">Close design viewer</span>×</button><img src={item.image} alt={item.alt} /><div className="viewer-details"><p className="eyebrow">{item.category}</p><h2 id="design-viewer-title">{item.title}</h2>{item.description && <p>{item.description}</p>}{item.tools?.length > 0 && <p className="viewer-meta"><span>Tools</span>{item.tools.join(' / ')}</p>}{item.clientOrOrganisation && <p className="viewer-meta"><span>Organisation</span>{item.clientOrOrganisation}</p>}{item.year && <p className="viewer-meta"><span>Year</span>{item.year}</p>}</div></div></div>
}

function CreativeWorkPage({ content }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)
  const categories = ['All', ...content.categories.filter((category) => content.items.some((item) => item.category === category))]
  const items = content.items.filter((item) => activeCategory === 'All' || item.category === activeCategory)

  return <div className="creative-page">
    <section className="section-pad creative-intro"><div className="shell creative-intro-grid"><div><p className="eyebrow">{content.intro.eyebrow}</p><h1>{content.intro.title}</h1></div><p className="creative-lede">{content.intro.description}</p></div></section>
    <section className="section-pad creative-gallery-section"><div className="shell"><div className="creative-filter" aria-label="Filter creative work">{content.items.length > 0 && categories.map((category) => <button key={category} className={activeCategory === category ? 'is-active' : ''} type="button" onClick={() => setActiveCategory(category)}>{category}</button>)}</div>{items.length > 0 ? <div className="creative-gallery">{items.map((item) => <button className="design-tile" type="button" key={item.id} onClick={() => setSelectedItem(item)}><img src={item.image} alt={item.alt} /><span>{item.title}</span></button>)}</div> : <div className="creative-empty"><span className="number">01</span><h2>Creative work will be showcased here.</h2><p>Visual communication, publication, outreach, event, and design work will appear as it is added.</p></div>}</div></section>
    <section className="section-pad creative-cta"><div className="shell"><p className="eyebrow">The wider practice</p><h2>Digital work spans systems, information, and visual communication.</h2><div className="hero-actions"><Link className="button" to="/projects">View Projects <span aria-hidden="true">↗</span></Link><Link className="text-link" to="/contact">Get In Touch <span aria-hidden="true">↗</span></Link></div></div></section>
    {selectedItem && <DesignViewer item={selectedItem} onClose={() => setSelectedItem(null)} />}
  </div>
}

export default CreativeWorkPage
