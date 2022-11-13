import React from 'react';
import {Navbar, Hero, Security, SavingWays, Saver, Investify, Testimonial, Featured, Footer}  from './components';

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Security/>
    <SavingWays/>
    <Investify/>
    <Saver/>
    <Testimonial/>
    <Featured/>
    <Footer/> 
    </>
  )
}

export default App;