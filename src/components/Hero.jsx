import React from 'react'

import AppleIcon from '../assets/images-piggyvest/apple-icon.svg'
import GoogleIcon from '../assets/images-piggyvest/google-icon.svg'
import Rect from  '../assets/images-piggyvest/rect.png';
import HeaderImage from  '../assets/images-piggyvest/headerImg.png';
import Card1 from  '../assets/images-piggyvest/card1.png';
import Card2 from  '../assets/images-piggyvest/card2.png';
import Cross from '../assets/images-piggyvest/cross.svg';
import Dot from '../assets/images-piggyvest/dot.svg';
import Circle from '../assets/images-piggyvest/circle.svg';


import '../styles';

const Hero = () => {
  return (
    <>
    <div className="hero-container">
    
        <div className="hero-container-summary">

        <div className="summary-text">
        <h1>The Better Way to Save & Invest.</h1>
        <p>PiggyVest helps over 4 million customers achieve their financial goals by helping them save and invest with ease.</p>
        </div>
      
      
    <div className="Hero-buttons">
     <ul className='button-group1'>
        <li><a href='/#Sign-up'  id='btn-primary'>Create free account</a></li>
      </ul>

      <ul className='button-group2'>
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


        <div className="hero-container-aside">
        <div className="aside-content">
        <img src={Rect} alt="img/bg-rect" id='aside-rect'/>
         <img src={HeaderImage} alt="img/header-img" id='aside-img'/>
        </div>
        <img src={Card1} alt="img/card1" id='aside-card1'/>
        <img src={Card2} alt="img/card2" id='aside-card2'/>
        <img src={Cross} alt="img/cross" id='cross'/>
        <img src={Dot} alt="img/dot" id='dot'/>
        <img src={Circle} alt="img/circle" id='circle'/>
        </div>
    </div>
    </>
  )
}

export default Hero