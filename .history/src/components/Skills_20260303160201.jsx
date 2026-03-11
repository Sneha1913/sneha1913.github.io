import '../styles/Skills.css'

const skills = [
  { name: 'JavaScript', level: 85, icon: '⚡' },
  { name: 'React', level: 75, icon: '⚛️' },
  { name: 'HTML', level: 90, icon: '🌸' },
  { name: 'CSS', level: 85, icon: '✨' },
  { name: 'Git', level: 70, icon: '🌿' },
  { name: 'Figma', level: 65, icon: '🎨' },
]

const tools = ['VS Code', 'GitHub', 'Vite', 'npm', 'Chrome DevTools', 'Figma']

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-tag">✦ what i know</div>
      <h2>My <span className="highlight">Skills</span></h2>
      <p className="section-sub">Technologies I work with ✿</p>

      <div className="skills-container">
        <div className="skills-bars">
          {skills.map((skill, i) => (
            <div className="skill-item" key={i}>
              <div className="skill-label">
                <span>{skill.icon} {skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ '--width': `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="tools-section">
          <h3>Tools & More ♡</h3>
          <div className="tools-grid">
            {tools.map((tool, i) => (
              <div className="tool-chip" key={i}>{tool}</div>
            ))}
          </div>
          <div className="skills-note">
            <p>✦ Always learning & growing</p>
            <p>✿ Currently exploring: TypeScript, Tailwind</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills