import { useState, useEffect } from 'react'
import '../styles/Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['about', 'experience', 'projects', 'skills', 'contact']

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo">
          <span className="logo-bracket">&lt;</span>
          sneha
          <span className="logo-bracket">/&gt;</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link, i) => (
            <li key={link}>
              <a href={`#${link}`} onClick={() => setMenuOpen(false)}>
                <span className="link-num">0{i + 1}.</span> {link}
              </a>
            </li>
          ))}
          <li>
          <a 
  href="/resume.pdf" 
  className="btn btn-green btn-sm" 
  target="_blank" 
  rel="noreferrer"
>
  Resume ↗
</a>
          </li>
        </ul>

        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar