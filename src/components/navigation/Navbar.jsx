import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar({ content }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="shell nav-inner" aria-label="Main navigation">
        <NavLink to="/" className="brand" aria-label={`${content.identity.name}, home`}>
          <span className="brand-mark">F</span>
          <span>{content.identity.name}</span>
        </NavLink>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          <span className={`menu-icon ${menuOpen ? 'is-open' : ''}`} aria-hidden="true"><i /><i /></span>
        </button>
        <div id="primary-menu" className={`nav-menu ${menuOpen ? 'is-open' : ''}`}>
          <div className="nav-links">
            {content.navigation.map((item) => <NavLink key={item.path} to={item.path} onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : undefined}>{item.label}</NavLink>)}
          </div>
          <Link className="button button-small" to="/contact" onClick={() => setMenuOpen(false)}>Let&apos;s Work Together <span aria-hidden="true">↗</span></Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
