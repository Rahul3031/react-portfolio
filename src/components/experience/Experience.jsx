import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
function Experience() {
  return (
    <section id="experience">
      <h5>what skills i have</h5>
      <h2>my experience</h2>

      <div className="conatiner experience__container">
        <div className="experience__frontend">
          <h3>frontend developemnet</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon"/>
               <div>
                 <h4>HTML</h4>
                 <small className='text-light'>experienced</small>
               </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                 <h4>HTML</h4>
                 <small className='text-light'>experienced</small>
               </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                 <h4>HTML</h4>
                 <small className='text-light'>experienced</small>
               </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                 <h4>HTML</h4>
                 <small className='text-light'>experienced</small>
               </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                 <h4>HTML</h4>
                 <small className='text-light'>experienced</small>
               </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                 <h4>HTML</h4>
                 <small className='text-light'>experienced</small>
               </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Web Developement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                 <h4>HTML</h4>
                 <small className='text-light'>experienced</small>
               </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                 <h4>ReactJs</h4>
                 <small className='text-light'>experienced</small>
               </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                 <h4>Css</h4>
                 <small className='text-light'>experienced</small>
               </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                 <h4>HTML</h4>
                 <small className='text-light'>experienced</small>
               </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                 <h4>JavaScript</h4>
                 <small className='text-light'>experienced</small>
               </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience-details-icon"/>
              <div>
                 <h4>HTML</h4>
                 <small className='text-light'>experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience