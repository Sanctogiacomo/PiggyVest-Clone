import React from 'react'
import InvestImage from '../assets/images-piggyvest/invest.png';
import DotInvesify from '../assets/images-piggyvest/dot-investify.svg';
import CircleInvestify from '../assets/images-piggyvest/circle-investify.svg';


import '../../sass/Investify.css';

const Investify = () => {
  return (
    <>
    <div className="investify-container">
        <div className="investify-image">
            <img src={InvestImage} alt="image/investify"  id='investify-image'/>
            <img src={DotInvesify} alt="img/dot" id='investify-dot'/>
            <img src={CircleInvestify} alt="img/circle" id='investify-circle'/>
        </div>
        <div className="investify-text">
        <div className="investify-text-specific">
        <p> Up To 25% Returns</p>
        </div>
        <h2>Access investment opportunities</h2>
        <p>Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities.</p>
         <div className="investify-text-link">
         <a href="">Learn more about Investments ></a>
         </div>
         
        </div>
    </div>
    </>
  )
}

export default Investify;