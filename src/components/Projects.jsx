import '../styles/Projects.css'

const projects = [
  {
    num: '01',
    title: 'Custom Shopify Theme — EGlobe',
    desc: 'Engineered a fully custom Shopify theme from scratch using Liquid, JavaScript and CSS. Implemented custom sections, dynamic metafields, and optimised frontend assets — achieving a 35% reduction in page load time and measurable improvements in Core Web Vitals.',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'CSS3', 'Metafields'],
    metric: '35% faster load time',
    live: '#',
    github: '#',
  },
  {
    num: '02',
    title: 'Payment Gateway Integration',
    desc: 'Architected and integrated multiple third-party payment gateways into Shopify Plus stores for international clients. Custom checkout flow built with Shopify Scripts and REST APIs — reducing checkout errors by 25% and increasing transaction success rates.',
    tags: ['Shopify Plus', 'REST API', 'Liquid', 'Checkout Customisation'],
    metric: '25% fewer checkout errors',
    live: '#',
    github: '#',
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