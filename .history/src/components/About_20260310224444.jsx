import '../styles/About.css'

function About() {
  return (
    <section id="about" className="about-section">
      <hr className="section-divider" />
      <div className="section-wrap">
        <div className="about-grid">
          <div className="about-left">
            <div className="section-label">about me</div>
            <h2 className="section-title">
              Building the web,<br /><span>one store at a time.</span>
            </h2>
            <div className="about-img-wrap">
              {/* Replace with: <img src="your-photo.jpg" alt="Sneha" /> */}
              <div className="about-img-placeholder">S</div>
              <div className="about-img-border" />
            </div>
          </div>

          <div className="about-right">
            <p>
              I'm a <strong>Shopify Developer and Software Engineer</strong> with
              4+ years of experience building scalable eCommerce platforms and
              high-performance storefronts. I specialise in custom Shopify theme
              development, Liquid templating, PHP backend architecture, and REST
              API integration.
            </p>
            <p>
              From engineering custom themes that boost storefront performance
              by 30%, to architecting Shopify Plus solutions with seamless
              payment gateway integrations — I bring a full-stack perspective
              to every project I take on.
            </p>
            <p>
              I bridge the gap between <strong>clean, maintainable code</strong> and
              <strong> pixel-perfect design</strong>, delivering business-driven
              technical solutions within strict timelines in Agile, remote-first
              environments.
            </p>

            <div className="about-details">
              <div className="detail-row">
                <span className="detail-label">Location</span>
                <span className="detail-val">Trivandrum, Kerala, India</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Education</span>
                <span className="detail-val">B.Tech CSE — APJ Abdul Kalam Technological University (2015–2019)</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Languages</span>
                <span className="detail-val">English · Malayalam · Tamil</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Status</span>
                <span className="detail-val status-open">● Open to full-time roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About