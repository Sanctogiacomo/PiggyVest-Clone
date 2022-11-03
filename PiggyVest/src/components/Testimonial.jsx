import React from 'react'

import AppleIcon from '../assets/images-piggyvest/apple-icon.svg'
import GoogleIcon from '../assets/images-piggyvest/google-icon.svg'

const Testimonial = () => {
  return (
    <>
<div className="container-testimonial">
<h3>4 Million + customers</h3>
<p>Since launching in 2016, over 4,000,000 people have used PiggyVest to manage their money better, avoid over-spending and be more accountable.
</p>

<div className="testimonial-buttons">
<ul className='testimonial-btn-group1'>
        <li><a href='/#Sign-up'  id='btn-primary'>Create free account</a></li>
      </ul>

<ul className='testimonial-btn-group2'>
        <li><a href='/#Sign-in' id='btn-applestore'>
            <img src={AppleIcon} alt="image/apple" />
            <p>Get on iPhone</p>
        </a>
        </li>

        <li>
        <a href='/#Sign-up'  id='btn-playstore'>
        <img src={GoogleIcon} alt="image/playstore" />
       <p>Get on Android</p>
        </a>
        </li>
      </ul>
</div>
</div>

    </>
  )
}

export default Testimonial