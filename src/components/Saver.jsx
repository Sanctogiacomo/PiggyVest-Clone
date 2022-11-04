import React from 'react';
import Tito from '../assets/images-piggyvest/Tito-img.jpg';


import ArrowSaver from '../assets/images-piggyvest/arrow-saver.svg';

import '../styles';



const Saver = () => {
  return (
    <>
<div className="container-saver">
<div className="saver-text">
  <div className="saver-text-main">
  <h2>Meet the saver of the month!</h2>
  <p>Every month, we shine a spotlight on one saver, asking them questions about their savings culture and how the product is specifically helping them shape how they spend and save for future responsibilities.
</p>
  </div>

<a href="http://" className="saver-text-link">
<img src={ArrowSaver} alt="image/arrow1" />
  <p className='saver-text-p'>Meet Tito</p>
  </a>
</div>
<div className="saver-image">
    <img src={Tito} alt="image/saver-tito" id='tito-img' />
</div>
</div>

    </>
  )
}

export default Saver