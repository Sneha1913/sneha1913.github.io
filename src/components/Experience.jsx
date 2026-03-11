import '../styles/Experience.css'

const experience = [
  {
    role: 'Shopify Developer',
    company: 'EGlobe IT Solutions',
    period: 'Jan 2024 – Present',
    location: 'Trivandrum',
    current: true,
    highlights: [
      'Engineered custom Shopify themes using Liquid, JavaScript & REST APIs — improving storefront performance by 30%.',
      'Architected scalable Shopify app features with third-party API & payment gateway integrations, reducing checkout errors by 25%.',
      'Optimized store speed, DB queries & frontend assets — decreasing page load time by 35% and improving Core Web Vitals.',
      'Delivered 15+ feature enhancements in remote Agile collaboration with UI/UX designers and stakeholders.',
    ],
  },
  {
    role: 'PHP Developer',
    company: 'YourVision Software Solutions',
    period: 'Aug 2022 – Jan 2024',
    location: 'Trivandrum',
    current: false,
    highlights: [
      'Built and maintained PHP MVC web applications, enhancing backend processing efficiency by 30%.',
      'Designed RESTful APIs and integrated MySQL databases, improving data retrieval performance by 25%.',
      'Implemented authentication systems, session management & role-based access controls.',
      'Optimized server-side logic and DB queries — decreasing application response time by 28%.',
    ],
  },
  {
    role: 'Python Developer',
    company: 'Soften Technologies',
    period: 'Aug 2020 – Jan 2021',
    location: 'Kochi',
    current: false,
    highlights: [
      'Developed Python modules and automation scripts, improving internal workflow efficiency by 15%.',
      'Contributed to debugging, code reviews & testing — reducing defects by 20% before staging deployment.',
      'Supported backend logic and database operations in an Agile team environment.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <hr className="section-divider" />
      <div className="section-wrap">
        <div className="section-label">experience</div>
        <h2 className="section-title">Where I've <span>Worked</span></h2>

        <div className="timeline">
          {experience.map((job, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-marker">
                <div className={`marker-dot ${job.current ? 'active' : ''}`} />
                {i < experience.length - 1 && <div className="marker-line" />}
              </div>

              <div className="timeline-card">
                <div className="job-header">
                  <div>
                    <h3 className="job-role">{job.role}</h3>
                    <p className="job-company">
                      {job.company}
                      <span className="job-location"> · {job.location}</span>
                    </p>
                  </div>
                  <span className={`job-period ${job.current ? 'current' : ''}`}>
                    {job.current && <span className="live-dot" />}
                    {job.period}
                  </span>
                </div>

                <ul className="job-highlights">
                  {job.highlights.map((h, j) => (
                    <li key={j}>
                      <span className="bullet">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience