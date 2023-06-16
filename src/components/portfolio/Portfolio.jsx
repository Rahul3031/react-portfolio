import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/kanha.jpg'
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>my recent work</h5>
      <h2>portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="img1" />
          </div>
          <h3>this is prtfolio item tittle</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="img1" />
          </div>
          <h3>this is prtfolio item tittle</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="img1" />
          </div>
          <h3>this is prtfolio item tittle</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="img1" />
          </div>
          <h3>this is prtfolio item tittle</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="img1" />
          </div>
          <h3>this is prtfolio item tittle</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="img1" />
          </div>
          <h3>this is prtfolio item tittle</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio