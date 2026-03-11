import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-blob blob1" />
      <div className="hero-blob blob2" />
      <div className="hero-blob blob3" />

      <div className="hero-content">
        <p className="hero-greeting">hello, world! ˙ᵕ˙</p>
        <h1 className="hero-name">
          I'm <span className="highlight">Sneha</span>
        </h1>
        <p className="hero-title">ahsgxdsahxsaxSoftware Engineer & Creative Thinker</p>
        <p className="hero-desc">
          I build stunning Shopify stores and craft pixel-perfect frontend experiences — turning ideas into beautiful, conversion-ready websites. ✦
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Say Hello ♡</a>
        </div>
      </div>

      <div className="hero-decoration">
      <div className="floating-card card1">✦ Shopify</div>
        <div className="floating-card card2">♡ Liquid</div>
        <div className="floating-card card3">✿ React</div>
      </div>
    </section>
  )
}

export default Hero