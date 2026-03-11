import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Grid background */}
      <div className="hero-grid" />
      {/* Green glow */}
      <div className="hero-glow" />

      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-tag">
            <span className="tag-dot" />
            Available for full-time roles
          </p>

          <h1 className="hero-name">
            Sneha Subhash<span className="cursor">_</span>
          </h1>

          <h2 className="hero-role">
            Shopify Developer<br />
            <span className="role-and">&amp;</span> Software Engineer
          </h2>

          <p className="hero-desc">
            4+ years building scalable eCommerce platforms and high-performance
            Shopify storefronts. Expert in Liquid, PHP, JavaScript, REST APIs —
            turning business requirements into technical solutions that convert.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">4+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">15+</span>
              <span className="stat-label">Features Delivered</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">35%</span>
              <span className="stat-label">Avg Load Time Reduction</span>
            </div>
          </div>

          <div className="hero-btns">
            <a href="#projects" className="btn btn-green">View My Work ↓</a>
            <a href="#contact" className="btn btn-ghost">Get In Touch</a>
          </div>
        </div>

        <div className="hero-terminal">
          <div className="terminal-header">
            <span className="t-dot red" />
            <span className="t-dot yellow" />
            <span className="t-dot green" />
            <span className="t-title">sneha.config.js</span>
          </div>
          <div className="terminal-body">
            <pre>{`const developer = {
  name: "Sneha Subhash",
  role: "Shopify Developer",
  location: "Trivandrum, India",
  experience: "4+ years",
  
  stack: [
    "Shopify", "Liquid",
    "PHP", "JavaScript",
    "MySQL", "REST APIs"
  ],

  expertise: [
    "Custom Theme Dev",
    "Shopify Plus",
    "Performance Optimization",
    "App Integration"
  ],

  status: "open_to_work ✓"
}`}</pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero