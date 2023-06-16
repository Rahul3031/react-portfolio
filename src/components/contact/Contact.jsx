import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

import {useRef} from 'react';
import emailjs from 'emailjs-com';

function Contact() {
   const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fr7h62p', 'template_od05bl2', form.current, 'kx3MYucBGnxSGgSZx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id="contact">
      <h5>get in touch</h5>
      <h2>contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icons'/>
            <h4>Email</h4>
            <h5>rahulassan1@gmail.com</h5>
            <a href="mailto:rahulassan1@gmail.com" target="_blank" >send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icons'/>
            <h4>whatsapp</h4>
            <h5>+918571962949</h5>
            <a href="https://api.whatsapp.com/send?phone+918571962949" target="_blank" >send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Measaage' required></textarea>
          <button type='submit' className='btn btn-primary'>send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact