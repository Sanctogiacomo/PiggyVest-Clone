import React from 'react';

import AppleIcon from '../assets/images-piggyvest/apple-icon.svg';
import GoogleIcon from '../assets/images-piggyvest/google-icon.svg';

import '../styles';

const Testimonial = () => {
  return (
    <>
<div className="container-testimonial">

<div className="testimonial-content">
<div height="575" class="sc-bdfBQB LcWVf">
  <div class="box">
    <small>Thursday, 6th of October 2022 by 11:42 AM</small>
    <div class="d-flex mt-20 clear-right">
      <img src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img6a9c68559e.jpeg" alt="Tobenna A" width="35" height="10"/>
        <div>
        <h6>Tobenna A</h6><p>Thanks to piggyvest I've saved enough money to start up a really large business</p></div>
        </div>
    </div>
        
        
  <div class="box">
    <small>Wednesday, 5th of October 2022 by 03:08 AM</small><div class="d-flex mt-20 clear-right">
    <img src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img2a4bd14305.jpeg" alt="Micheal F" width="35" height="10"/>
    <div>
    <h6>Micheal F</h6><p>I just joined tho and I believe piggyVest won't disappoint me 😊❤️</p>
    </div>
    </div>
  </div>

<div class="box">
    <small>Tuesday, 4th of October 2022 by 18:01 PM</small>
    <div class="d-flex mt-20 clear-right">
    <img src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/ava8c9e0a401a.jpg" alt="Oluwadamilola A" width="35" height="10"/><div><h6>Oluwadamilola A</h6>
    <p>PiggyVest was introduced to me some years back and I have been able to save multiple millions over the years. I look forward to more from Piggyvest.</p>
    </div>
    </div>
</div>
    
<div class="box">
      <small>Saturday, 24th of September 2022 by 19:58 PM</small>
      <div class="d-flex mt-20 clear-right">
      <img src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img907630da2b.jpeg" alt="Joseph A" width="35" height="10"/><div><h6>Joseph A</h6><p>Piggvest has helped me with buying my new iPhone and it is the most reliable app.</p>
      </div>
      </div>
    </div>

  <div class="box"><small>Thursday, 6th of October 2022 by 11:42 AM</small><div class="d-flex mt-20 clear-right">
        <img src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img6a9c68559e.jpeg" alt="Tobenna A" width="35" height="10"/>
      <div><h6>Tobenna A</h6>
      <p>Thanks to piggyvest I've saved enough money to start up a really large business</p>
  </div>
  </div>
  </div>
      
  <div class="box"><small>Wednesday, 5th of October 2022 by 03:08 AM</small>
      <div class="d-flex mt-20 clear-right">
      <img src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img2a4bd14305.jpeg" alt="Micheal F" width="35" height="10"/><div><h6>Micheal F</h6>
      <p>I just joined tho and I believe piggyVest won't disappoint me 😊❤️</p></div>
      </div>
  </div>
      
  <div class="box"><small>Tuesday, 4th of October 2022 by 18:01 PM</small>
      <div class="d-flex mt-20 clear-right"><img src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/ava8c9e0a401a.jpg" alt="Oluwadamilola A" width="35" height="10"/><div>
        <h6>Oluwadamilola A</h6><p>PiggyVest was introduced to me some years back and I have been able to save multiple millions over the years. I look forward to more from Piggyvest.</p></div>
        </div>
        </div>

        
    <div class="box"><small>Saturday, 24th of September 2022 by 19:58 PM</small><div class="d-flex mt-20 clear-right"><img src="https://storage.googleapis.com/piggybankservice.appspot.com/_story_pics/img907630da2b.jpeg" alt="Joseph A" width="35" height="10"/><div>
          <h6>Joseph A</h6>
          <p>Piggvest has helped me with buying my new iPhone and it is the most reliable app.</p></div>
          </div>
          </div>
          </div>
  </div> 

  <div className="testimonial-aside">
  <h4>4 Million + customers</h4>
<p id='testimonial-aside-p'>Since launching in 2016, over 4,000,000 people have used PiggyVest to manage their money better, avoid over-spending and be more accountable.
</p>

<div className="testimonial-buttons">
<ul className='testimonial-btn-group1'>
        <li><a href='/#Sign-up'  id='btn-primary' className='btn-test'>Create free account</a></li>
      </ul>

<ul className='testimonial-btn-group2'>
        <li><a href='/#Sign-in' class='btn-applestore'>
            <img src={AppleIcon} alt="image/apple" />
            <p>Get on iPhone</p>
        </a>
        </li>

        <li>
        <a href='/#Sign-up'  class='btn-playstore'>
        <img src={GoogleIcon} alt="image/playstore" />
       <p>Get on Android</p>
        </a>
        </li>
      </ul>
  </div>

</div>
</div>

    </>
  )
}

export default Testimonial