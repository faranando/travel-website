import React from 'react'
import BrandIcon from "./IconText"
import Button from '../elements/Button'

export default function Footer() {
  return (
    <footer>
    <div className='container'>
      <div className='row'>
        <div className='col-4' style={{display: 'flex', flexDirection: 'column'}}>
            <BrandIcon />
                <span style={{marginTop: 5}}>
                    We kaboom your exciting holiday instantly.
                </span>
        </div>
        <div className='col-2'>
            <p>For beginners</p>
            <ul className='footer-items'>
                <li><Button className='footer-link' type="link" url="/register">New Account</Button></li>
                <li><Button className='footer-link' type="link" url="/properties">Start Booking a Room</Button></li>
                <li><Button className='footer-link' type="link" url="/use-payments">Use Payments</Button></li>
            </ul>
        </div>
        <div className='col-2'>
        <p>Explore Us</p>
            <ul className='footer-items'>
                <li><Button className='footer-link' type="link" url="">Our Careers</Button></li>
                <li><Button className='footer-link' type="link" url="">Privacy</Button></li>
                <li><Button className='footer-link' type="link" url="">Terms and Conditions</Button></li>
            </ul>
        </div>
        <div className='col-4'>
        <p>Contact Us</p>
            <ul className='footer-items'>
                <li><Button className='footer-link' type="link" url="">support@staycation.id</Button></li>
                <li><Button className='footer-link' type="link" url="">021-2208-1996</Button></li>
                <li><Button className='footer-link' type="link" url="">Staycation - Kemang, Jakarta</Button></li>
            </ul>
        </div>
        <div className='col-12 text-center' style={{margin: "20px 0"}}>
            <span>Copyright 2022 - All rights reserved - Staycation</span>
        </div>
      </div>
    </div>
    </footer>
  )
}
