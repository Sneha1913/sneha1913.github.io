import '../styles/Projects.css'

const projects = [
  {
    title: 'Project One',
    desc: 'A beautiful web app built with React. Describe what it does and what problem it solves.',
    tags: ['React', 'CSS', 'JavaScript'],
    emoji: '✦',
    color: 'lavender',
    live: '#',
    github: '#',
  },
  {
    title: 'Project Two',
    desc: 'Another cool project. Add a short description that highlights your skills and creativity.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    emoji: '✿',
    color: 'blush',
    live: '#',
    github: '#',
  },
  {
    title: 'Project Three',
    desc: 'Your third project. What did you build? What did you learn? Share your story here.',
    tags: ['JavaScript', 'API', 'CSS'],
    emoji: '♡',
    color: 'mint',
    live: '#',
    github: '#',
  },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-tag">✦ my work</div>
      <h2>Featured <span className="highlight">Projects</span></h2>
      <p className="section-sub">A few things I've built with love ♡</p>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className={`project-card ${project.color}`} key={i}>
            <div className="project-emoji">{project.emoji}</div>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.live} className="btn btn-sm btn-primary">Live ↗</a>
              <a href={project.github} className="btn btn-sm btn-outline">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects