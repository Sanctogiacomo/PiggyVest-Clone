import React from 'react'
import Logo from '../assets/images-piggyvest/logo.svg';
import Hamburger from '../assets/images-piggyvest/hamburger.svg';
import Xbar from '../assets/images-piggyvest/xbar.svg';
import PiggyBank from '../assets/images-piggyvest/piggy.png';
import SafeLock from '../assets/images-piggyvest/safelock.png';
import Target from '../assets/images-piggyvest/target.png';
import FlexNaira from '../assets/images-piggyvest/flex.png';



import '../styles';

const Navbar = () => {
  return (
    <>
    <nav>
      <div className="nav-container">
    <div className="nav-logo-list">
    <a href='#'><img src={Logo} alt='Piggyvest/logo' className='logo'/></a>
    <ul className='nav-list'>
      <li className='nav-item'>
      <a href='/#save' className='dropdown'>Save
      <div className='dropdown-menu'>
        <a href='#' class='dropdown-menu-item' id='dropdown-menu-item1'>
        <img src={PiggyBank} alt='img/piggy' />
        <p>Piggybank</p>
        </a>
        <a href='#' class='dropdown-menu-item' id='dropdown-menu-item2'>
        <img src={SafeLock} alt='img/piggy'/>
        <p>Safelock</p>
        </a>
        <a href='#' class='dropdown-menu-item' id='dropdown-menu-item3'>
        <img src={Target} alt='img/piggy'  />
        <p>Target Savings</p>
        </a>
        <a href='#' class='dropdown-menu-item' id='dropdown-menu-item4'>
        <img src={FlexNaira} alt='img/piggy'/>
        <p>Flex Naira</p>
        </a>
      </div>
      </a>
      </li>
      <li className='nav-item'><a href='#'>Invest</a></li>
      <li><a href='#'>Stories</a></li>
      <li><a href='#'>FAQs</a></li>
      <li><a href='#'>  Blog</a></li>
    </ul>
    </div>
   
    <div className="nav-buttons">
      <ul className='button-group'>
        <li><a href='/#Sign-in' id='btn-secondary'>Sign in</a></li>
        <li><a href='/#Sign-up'  id='btn-primary'>Create free account</a></li>
      </ul>
    </div>

    <div className="toggle-nav-container hidden">
      <span> <img src={Hamburger} alt="img/open-nav" id='toggle-open' /></span>
      <span> <img src={Xbar} alt="img/close-nav" id='toggle-close' className='hidden' /></span>
    </div>

      </div>
    </nav>
    </>
  )
}

export default Navbar;