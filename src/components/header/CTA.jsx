import React from 'react'
import CV from '../../assets/Resume.pdf'
const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} className='btn' target="_blank">My Resume</a>
        <a href={CV} download className='btn btn-primary'>Download Resume</a>
    </div>
  )
}

export default CTA