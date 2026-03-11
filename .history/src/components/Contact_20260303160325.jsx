import { useState } from 'react'
import '../styles/Contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 👉 Connect to EmailJS or Formspree later to make this actually send emails
    console.log('Form submitted:', form)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="contact" id="contact">
      <div className="section-tag">✦ get in touch</div>
      <h2>Say <span className="highlight">Hello</span> ♡</h2>
      <p className="section-sub">I'd love to hear from you!</p>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <span>✦</span>
            <div>
              <h4>Email</h4>
              <p>sneha@email.com</p>
            </div>
          </div>
          <div className="contact-card">
            <span>✿</span>
            <div>
              <h4>GitHub</h4>
              <p>github.com/Sneha1913</p>
            </div>
          </div>
          <div className="contact-card">
            <span>♡</span>
            <div>
              <h4>LinkedIn</h4>
              <p>linkedin.com/in/sneha1913</p>
            </div>
          </div>
          <p className="contact-note">
            Open to freelance, internships & full-time roles ✦
          </p>
        </div>

        <div className="contact-form-wrap">
          {sent && (
            <div className="success-msg">
              ✿ Message sent! I'll get back to you soon ♡
            </div>
          )}
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Sneha Subhash"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="hello@email.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="I'd love to work with you..."
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Send Message ✦
          </button>
        </div>
      </div>

      <div className="footer">
        <p>crafted with ♡ by sneha · {new Date().getFullYear()}</p>
      </div>
    </section>
  )
}

export default Contact