import React from 'react';
import Logo from '../assets/images-piggyvest/logo.svg';
import Compliance from '../assets/images-piggyvest/compliance.webp'

import '../styles';

const footer = () => {
  return (
    <>
    <footer>
      <div className="footer-top">
      <div className="footer-images">
        <img src={Logo} alt="images/PiggyVest-Logo" />
        <img src={Compliance} alt="images/Compliance-Logo" id='compliance-image'/>
        </div>
  
       <div className="footer-top-text">
       <div className="footer-text-section">
        <p>Products</p> 
        <a href="http://" target="_blank" >Piggybank</a> 
        <a href="http://" target="_blank" >Invest</a> 
        <a href="http://" target="_blank" >Safelock</a> 
        <a href="http://" target="_blank" >Target Savings</a> 
        <a href="http://" target="_blank" >Flex Naira</a> 
        </div>
 
        <div className="footer-text-section" id='footer-text-section1'>
        <p>Company</p> 
        <a href="http://" target="_blank" >About</a> 
        <a href="http://" target="_blank" >FAQs</a> 
        <a href="http://" target="_blank" >Blog</a> 
        <a href="http://" target="_blank" >Legal</a> 
        </div>

        <div className="footer-text-section">
        <p>Legal</p> 
        <a href="http://" target="_blank" >Terms</a> 
        <a href="http://" target="_blank" >About</a> 
        <a href="http://" target="_blank" >Security</a> 
        </div>
        
       </div>
      
      <div className="footer-top-info">
        <ul className="social-icons">
      <li class="mr-10">
      <a class="" target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/PiggyBankNG/"><i class="fab fa-facebook-square fa-2x">
        </i></a></li>
      
    <li class="mr-10"><a class="" target="_blank" rel="noreferrer noopener" href="https://mobile.twitter.com/PiggyBankNG/">
      <i class="fab fa-twitter-square fa-2x"></i></a></li>
      <li class=""><a class="" target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/piggybankng/"><i class="fab fa-instagram-square fa-2x"></i></a></li>
      </ul>
    
      <div className="contact-street">
      <p>Tesmot house, Abdulrahman Okene</p>
      <p>close, Victoria Island, Lagos, Nigeria.</p>
      </div>
      
      <div className="contact-mail">
      <p>contact@piggyvest.</p>
      </div>
      <div className="contact-phone">
      <p>+234 700 933 933 933</p>
      </div>
    
      </div>
      </div>
       

<div className="footer-bottom">
<p>Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 6 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.</p>
        <a href="http://"><p>2016 - 2022 PiggyTech Global Limited - RC 1405222</p></a>
        </div>
  </footer>
    </>
  )
}

export default footer;