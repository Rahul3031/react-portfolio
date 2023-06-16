import React from 'react'
import './Testimonials.css'
import AVTR from '../../assets/kanha.jpg'
// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
    avatar: AVTR,
    name: 'tine snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga odit nihil, iure ratione amet ipsa adipisci quas molestiae? Ullam tempora a natus reprehenderit ipsam, nisi inventore consequatur mollitia? Dolorum.'
  },
  {
    avatar: AVTR,
    name: 'tine snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga odit nihil, iure ratione amet ipsa adipisci quas molestiae? Ullam tempora a natus reprehenderit ipsam, nisi inventore consequatur mollitia? Dolorum.'
  },
  {
    avatar: AVTR,
    name: 'tine snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga odit nihil, iure ratione amet ipsa adipisci quas molestiae? Ullam tempora a natus reprehenderit ipsam, nisi inventore consequatur mollitia? Dolorum.'
  },
  {
    avatar: AVTR,
    name: 'tine snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo fuga odit nihil, iure ratione amet ipsa adipisci quas molestiae? Ullam tempora a natus reprehenderit ipsam, nisi inventore consequatur mollitia? Dolorum.'
  },
]




function testimonials() {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"       modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index}  className="testimonials">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials