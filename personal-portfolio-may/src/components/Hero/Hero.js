/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Hero.scss'
import HeroImage from "./HeroImage.png";
import { AiOutlineArrowDown } from 'react-icons/ai';


function Hero() {
  return (
    <section className='hero'>
      <div className='heroContainer'>
        <h1>CREATIVE <br></br>DEVELOPER</h1>
        <img src={HeroImage}></img>
        <div className='bottom'>
          <h1><AiOutlineArrowDown/></h1>
          <p>
            I SUPPORT DESIGNERS
            <br></br>
            AND AGENCIES WITH
            <br></br>
            CREATIVE DEVELOPMENT
          </p>
          <h1>PEDRO <br></br>TASCA</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
