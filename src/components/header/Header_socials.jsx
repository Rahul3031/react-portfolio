import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Header_socials = () => {
  return (
    <div className="header__socials">
       <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
       <a href="https://github.com" target="_blank"><BsGithub/></a>
       {/* target="_blank used for the open in new tab" */}
    </div>
  )
}

export default Header_socials