import React from 'react'
import ImageHero from "../assets/images/img-hero.jpg"
import IconCities from "../assets/images/icons/ic_cities.svg"
import IconTraveler from "../assets/images/icons/ic_traveler.svg"
import IconTreasure from "../assets/images/icons/ic_treasure.svg"

import Button from '../elements/Button'
import numberFormat from '../utillities/FormatNumber'

export default function Hero(props) {

    function showMostPicked(){
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop -30,
            behavior: "smooth"
        })
    }
    
    
  return (
    <section className='container pt-5'>
        <div className='row align-items-center'>
            <div className='col-auto pe-5' style={{width: 530}}>
                <h1 className='fw-bold mb-3'>
                    Forget Busy Work, <br/>
                    Start Next Vacation
                </h1>
                <p className='mb-4 font-weight-light text-black-50 w-75'style={{lineHeight: "170%"}} >
                    We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
                </p>
                <Button className='btn' style={{padding: "0 27px", fontSize: "18px" }} hasShadow isPrimary onClick={showMostPicked}>Show Me Now</Button>

                <div className='row' style={{marginTop:80}}>
                    <div className='col-auto' style={{marginRight:35}}>
                        <img src={IconTraveler} alt="icon-traveler" width={36} height={36} />
                        <h6 className='mt-3'>
                            {numberFormat(props.data.travelers)} <span className='text-black text-opacity-25 font-weight-light'>travelers</span>
                        </h6>
                    </div>
                    <div className='col-auto' style={{marginRight:35}}>
                        <img src={IconTreasure} alt="icon-treasure" width={36} height={36} />
                        <h6 className='mt-3'>
                            {numberFormat(props.data.treasures)} <span className='text-black text-opacity-25 font-weight-light'>treasures</span>
                        </h6>
                    </div>
                    <div className='col-auto'>
                        <img src={IconCities} alt="icon-cities" width={36} height={36} />
                        <h6 className='mt-3'>
                            {numberFormat(props.data.cities)} <span className='text-black text-opacity-25 font-weight-light'>cities</span>
                        </h6>
                    </div>
                </div>
            </div>

            <div className='col-6 ps-5'>
                <div style={{width: 520, height: 410 }}>
                    <img src={ImageHero} alt="villa" className='img-fluid position-absolute' style={{borderRadius:"100px 15px 15px 15px"}} width={500}></img>
                </div>
            </div>
        </div>
    </section>
  )
}
