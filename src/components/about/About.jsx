import React from 'react'
import './About.css'
import Me from '../../assets/kanha.jpg'
import {FaGraduationCap} from 'react-icons/fa'
import {FaSchool} from 'react-icons/fa'
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container  about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaGraduationCap className='about__icon'/>
              <h3>Graduation</h3>
              <h5>National Institute of Technology, Kurukshetra</h5>
              <small>Cgpa: 8.7</small>
            </article>
            <article className="about__card">
              <FaSchool className='about__icon'/>
              <h3>Schooling</h3>
              <h5>Jawahar Navodaya Vidyalaya, Panipat</h5>
              <small>Score: 92.8%</small>
            </article>
          </div>
          
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, vitae aliquid necessitatibus aperiam ab ut libero fuga fugiat tempora nihil adipisci at amet iste commodi unde natus voluptatem eveniet dolor.</p>
            <a href="#contact" className='btn btn-primary'>lets talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About