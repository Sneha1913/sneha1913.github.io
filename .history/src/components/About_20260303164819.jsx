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
        A little  <span className="highlight">about me</span>
        </h1>
        <p className="hero-desc">
        I'm a Shopify Developer and Frontend Designer with 3+ years of hands-on 
experience building beautiful, high-converting online stores. From custom 
Shopify themes and Liquid templating to Shopify Plus projects — I bring 
both technical skill and a strong design eye to everything I build.        </p>
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