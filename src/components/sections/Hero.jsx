import heroImage from '../../assets/hero.png'

function Hero({ content }) {
  return <section className="hero section-pad"><div className="shell hero-grid">
    <div className="hero-copy reveal"><p className="eyebrow">{content.eyebrow}</p><p className="hero-title">{content.title}</p><h1>{content.heading}</h1><p className="hero-text">{content.text}</p><div className="hero-actions"><a className="button" href="#work">View My Work <span aria-hidden="true">↘</span></a><a className="text-link" href="#contact">Let&apos;s Connect <span aria-hidden="true">↗</span></a></div></div>
    <div className="hero-visual reveal reveal-delay"><div className="hero-image-wrap"><img src={heroImage} alt="Abstract layered digital form" /></div><div className="hero-note"><span>Currently exploring</span><strong>Technology that supports people and progress.</strong></div></div>
  </div></section>
}
export default Hero
