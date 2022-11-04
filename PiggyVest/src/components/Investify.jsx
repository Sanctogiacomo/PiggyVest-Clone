import React from 'react'
import InvestImage from '../assets/images-piggyvest/invest.png';
import Dot from '../assets/images-piggyvest/dot.svg';
import Circle from '../assets/images-piggyvest/circle.svg';


import '../styles';

const Investify = () => {
  return (
    <>
    <div className="investify-container">
        <div className="investify-image">
            <img src={InvestImage} alt="image/investify"  id='investify-image'/>
            <img src={Dot} alt="img/dot" id='investify-dot'/>
            <img src={Circle} alt="img/circle" id='investify-circle'/>
        </div>
        <div className="investify-text">
        <p> Up To 25% Returns</p>
        <h2>Access investment opportunities</h2>
        <p>Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment opportunities.</p>
         <a href="">Learn more about Investments ></a>
        </div>
    </div>
    </>
  )
}

export default Investify;