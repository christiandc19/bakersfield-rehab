import React from 'react'
import './TopBar.css'
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';


function TopBar() {
  return (
    <div className='topbar'>

        <div className='topbar-left container'>
            <div className='topbar-item'>
                <p>Make an Appointment</p>
            </div>
            <div className='topbar-item center'>
                <p>Faq</p>
            </div>
            <div className='topbar-item'>
                <p>2828 H street #H, Bakersfield, CA 93301</p>
            </div>
        </div>

        <div className='topbar-right container'>
            <div className='topbar-item socials'>
                <p>Follow us:  <AiOutlineInstagram /> <AiOutlineFacebook /> <FaPinterestP /></p> 
            </div>
            <div className='topbar-item'>
            <p><AiOutlinePhone /> <a href="tel:3234035422">+1 323 403-5422</a></p>
            </div>
        </div>
      
    </div>
  )
}

export default TopBar
