import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/kanha.jpg'
import Header_socials from './Header_socials'
function Header() {
  return (
    <header>
      <div className="container header_container">
        <div>
          <h3>Hello I'm</h3>
          <h2>Rahul Tomar</h2>
          <h5 className="text-light">Programmer</h5>
        </div>
        <CTA/>  {/* for resume and contact me */}
        <Header_socials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

      </div>
    </header>
  )
}

export default Header