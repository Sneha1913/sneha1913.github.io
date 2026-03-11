import { useState } from 'react'
import '../styles/Contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // 👉 Connect EmailJS or Formspree here to actually send emails
    console.log(form)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="contact-section">
      <hr className="section-divider" />
      <div className="section-wrap">
        <div className="section-label">contact</div>
        <h2 className="section-title">Let's <span>Work Together</span></h2>
        <p className="contact-intro">
          I'm actively looking for full-time Shopify Developer or Frontend
          Engineer roles. Have a project or opportunity? Let's talk.
        </p>

        <div className="contact-grid">
          <div className="contact-left">
            <div className="contact-links">
              <a href="mailto:sneha@email.com" className="contact-link">
                <span className="cl-icon">✉</span>
                <div>
                  <span className="cl-label">Email</span>
                  <span className="cl-val">sneha@email.com</span>
                </div>
              </a>
              <a href="https://github.com/Sneha1913" className="contact-link" target="_blank" rel="noreferrer">
                <span className="cl-icon">{ '{ }' }</span>
                <div>
                  <span className="cl-label">GitHub</span>
                  <span className="cl-val">github.com/Sneha1913</span>
                </div>
              </a>
              <a href="https://linkedin.com/in/sneha1913" className="contact-link" target="_blank" rel="noreferrer">
                <span className="cl-icon">in</span>
                <div>
                  <span className="cl-label">LinkedIn</span>
                  <span className="cl-val">linkedin.com/in/sneha1913</span>
                </div>
              </a>
            </div>

            <div className="availability-box">
              <span className="avail-dot" />
              <div>
                <p className="avail-title">Available for full-time roles</p>
                <p className="avail-sub">Shopify Developer · Frontend Engineer · Software Engineer</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            {sent && <div className="form-success">✓ Message sent! I'll get back to you soon.</div>}
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows="5" placeholder="Tell me about the role or project..." value={form.message} onChange={handleChange} />
            </div>
            <button className="btn btn-green" onClick={handleSubmit}>
              Send Message →
            </button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-logo">&lt;sneha /&gt;</span>
          <span className="footer-copy">Built with React & ♡ · {new Date().getFullYear()}</span>
        </div>
      </footer>
    </section>
  )
}

export default Contact