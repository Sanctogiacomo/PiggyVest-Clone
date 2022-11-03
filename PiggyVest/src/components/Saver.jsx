import React from 'react'
import '../styles'
import Tito from '../assets/images-piggyvest/Tito-img.jpg';


const Saver = () => {
  return (
    <>
<div className="container-saver">
<div className="saver-text">
<h2>Meet the saver of the month!</h2>
<p>Every month, we shine a spotlight on one saver, asking them questions about their savings culture and how the product is specifically helping them shape how they spend and save for future responsibilities.
</p>
<a href="http://">Meet Tito</a>
</div>
<div className="saver-image">
    <img src={Tito} alt="image/saver-tito" id='tito-img' />
</div>
</div>

    </>
  )
}

export default Saver