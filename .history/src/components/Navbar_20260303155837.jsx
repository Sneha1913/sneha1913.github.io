import { useState, useEffect } from 'react'
import '../styles/Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['about', 'projects', 'skills', 'contact']

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">✿ sneha</div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <li key={link}>
            <a href={`#${link}`} onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          </li>
        ))}
      </ul>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
    </nav>
  )
}

export default Navbar