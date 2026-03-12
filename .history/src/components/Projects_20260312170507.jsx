import '../styles/Projects.css'

const projects = [
  {
    num: '01',
    title: 'Headless Shopify Storefront — Maison',
    desc: 'Built a fully custom headless e-commerce storefront from scratch using the Shopify Storefront API. Engineered a product listing page with dynamic filtering and sorting, a product detail page with image gallery and variant selection, a persistent cart drawer with localStorage, and seamless checkout redirect via Shopify hosted payment flow. Deployed as a static site on Netlify with zero build dependencies.',
    tags: ['Shopify', 'Storefront API', 'GraphQL','JavaScript', 'CSS3','localStorage', 'Netlify'],
    metric: 'Zero-dependency static deployment',
    live: 'https://headless-shopify-first.netlify.app',
  github: 'https://github.com/Sneha1913/headless-shopify',
  },
  {
    num: '02',
    title: 'Cinemax — Movie Search & Watchlist App',
    desc: 'Built a cinematic movie discovery app using the OMDB REST API. Implemented OOP architecture with MovieAPI and WatchlistManager classes, Observer pattern for reactive UI updates, debounced live search with instant suggestions, in-memory API response caching with Map(), and a persistent watchlist with watched/unwatched filtering. Zero dependencies — pure vanilla JavaScript.',
    tags: ['JavaScript', 'REST API', 'OOP', 'Observer Pattern', 'localStorage', 'Debouncing', 'CSS3', 'Netlify'],
    metric: 'OOP + Observer Pattern in vanilla JS',
    live: 'https://your-cinemax-app.netlify.app',
    github: 'https://github.com/Sneha1913/movie-app',
  },
  {
    num: '03',
    title: 'PHP MVC Web Application',
    desc: 'Developed a scalable PHP MVC web application with RESTful API design, MySQL database architecture, role-based authentication and session management. Reduced application response time by 28% through optimised server-side logic and query tuning.',
    tags: ['PHP', 'MySQL', 'REST API', 'MVC', 'Authentication'],
    metric: '28% faster response time',
    live: '#',
    github: '#',
  },
  {
    num: '04',
    title: 'Storefront Performance Optimisation',
    desc: 'Led a full performance audit and optimisation sprint across multiple high-traffic Shopify stores — compressing assets, lazy-loading images, optimising database queries and improving SEO metrics. Result: 30% boost in overall storefront performance scores.',
    tags: ['Shopify', 'Performance', 'Core Web Vitals', 'SEO', 'JavaScript'],
    metric: '30% performance boost',
    live: '#',
    github: '#',
  },
]

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <hr className="section-divider" />
      <div className="section-wrap">
        <div className="section-label">projects</div>
        <h2 className="section-title">Things I've <span>Built</span></h2>
        <p className="projects-sub">
          A selection of work from my professional experience and personal builds.
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-top">
                <span className="project-num">{p.num}</span>
                <div className="project-links">
                  <a href={p.github} className="icon-link" title="GitHub">{ '{ }' }</a>
                  <a href={p.live} className="icon-link" title="Live">↗</a>
                </div>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-metric">
                <span className="metric-dot" />
                {p.metric}
              </div>
              <div className="project-tags">
                {p.tags.map(tag => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects