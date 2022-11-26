import React from 'react'
import Star from '../elements/Star'
import TestimonyFrame from '../assets/images/frame-testimony.jpg'
import Button from '../elements/Button'

export default function Testimony({data}) {
  return (
    <section className='container'>
      <div className='row align-items-center'>
        <div className='col-auto'>
          <div
            className='testimonial-hero'
            style={{margin:"30px 0 0 30px"}}
          >
            <img src={data.imageUrl} alt="testimonial" className='position-absolute' style={{borderRadius: 15}} />
            <img src={TestimonyFrame} alt="testimonial frame" className='position-absolute' style={{margin: "-30px 0 0 -30px", zIndex:-1}} />

          </div>
        </div>
        <div className='col'>
          <h6>
            {data.name}
          </h6>
          <Star value={data.rate} width={45} height={45} spacing={4} />
          <h5 className='h2 font-weight-light'>
            {data.content}
          </h5>
          <span className='text-black-50'>{data.familyName}, {data.familyOccupation}</span>
          <div>
          <Button className="btn px-3" style={{marginTop: 40}} hasShadow isPrimary type="link" href={`/testimonial/${data._id}`} >
          Read Their Story
          </Button>
          </div>
        </div>
      </div>
      
    </section>
  )
}
