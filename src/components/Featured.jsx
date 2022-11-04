import React from 'react';
import Techpoint from '../assets/images-piggyvest/TechPoint.png';
import TheGuardian from '../assets/images-piggyvest/TheGuardian.png';
import TechCrunch from '../assets/images-piggyvest/TechCrush.png';


const Featured = () => {
  return (
    <>
    <div className="container-featured">
      <div className="featured-text">
      <h4> As featured in</h4>
      </div>
   
    <div className="featured-images">
    <img src={Techpoint} alt="img/Techpoint" />
    <img src={TheGuardian} alt="img/TheGuardian" />
    <img src={TechCrunch} alt="img/TechCrunch" />
    </div>
    </div>
 
    
       
    </>
  )
}

export default Featured