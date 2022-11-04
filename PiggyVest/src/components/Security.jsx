import React from 'react'
import SecurityIcon from '../assets/images-piggyvest/security.png';

import '../styles';

const Security = () => {
  return (
    <>
    <div className="security-container">
    <div className="security-logo">
    <img src={SecurityIcon} alt="img/Security" id='security-image'/>
    </div>

    <div className="security-text">
    <h4>Your security is our priority</h4>
    <p>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is comepletely protected from fraud.</p>   
    <a href="/#security" id='security-text-a'>Learn more ></a>
    </div>
    
    </div>
    
    </>
  )
}

export default Security;
