/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Hero.scss'
import HeroImage from "./HeroImage.png";
import Arrow from "../../Arrow.svg"


function Hero() {
  return (
      <div>
        <h1>CREATIVE DEVELOPER</h1>
        <img src={HeroImage}></img>
        <div>
          <i>{Arrow}</i>
          <p>
            I SUPPORT DESIGNERS
            <br></br>
            AND AGENCIES WITH
            <br></br>
            CREATIVE DEVELOPMENT
          </p>
          <h1>PEDRO TASCA</h1>
        </div>
      </div>
  );
};

export default Hero;
