import '../styles/Skills.css'

const skillGroups = [
  {
    category: 'Shopify & eCommerce',
    icon: '◈',
    skills: ['Shopify', 'Shopify Plus', 'Liquid', 'Custom Theme Dev', 'Shopify CLI', 'Shopify Admin', 'Checkout Customisation', 'Metafields', 'Payment Gateway Integration', 'App Integration'],
  },
  {
    category: 'Languages',
    icon: '◉',
    skills: ['JavaScript ES6+', 'PHP', 'Python', 'Liquid', 'HTML5', 'CSS3 / SCSS'],
  },
  {
    category: 'Backend & Database',
    icon: '◫',
    skills: ['REST API Design', 'MySQL', 'MVC Architecture', 'Authentication Systems', 'Session Management', 'Role-Based Access Control', 'Performance Optimisation'],
  },
  {
    category: 'Frontend & Design',
    icon: '◧',
    skills: ['Bootstrap', 'Responsive Design', 'Core Web Vitals', 'SEO Optimisation', 'Cross-browser Testing', 'UI Optimisation'],
  },
  {
    category: 'Tools & Workflow',
    icon: '◌',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Agile / Scrum', 'Sprint Planning', 'Remote Collaboration', 'Technical Documentation'],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <hr className="section-divider" />
      <div className="section-wrap">
        <div className="section-label">skills</div>
        <h2 className="section-title">My <span>Tech Stack</span></h2>
        <p className="skills-sub">
          Technologies and tools I work with every day.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div className="skill-group" key={i}>
              <h3 className="skill-category">
                <span className="skill-icon">{group.icon}</span>
                {group.category}
              </h3>
              <div className="skill-tags">
                {group.skills.map(skill => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="soft-skills">
          <h3 className="skill-category">
            <span className="skill-icon">◎</span>
            Soft Skills
          </h3>
          <div className="soft-tags">
            {['Remote Collaboration', 'Agile Workflow', 'Problem Solving', 'Bug Fixing', 'Code Review', 'Technical Documentation', 'Sprint Planning'].map(s => (
              <span className="soft-tag" key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills