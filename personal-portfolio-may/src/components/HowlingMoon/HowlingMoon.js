/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './HowlingMoon.scss'
import { AiOutlineArrowDown } from 'react-icons/ai';
import HowlingMoonImg from './Images.png'


function HowlingMoon() {
  return (
    <section className='howlingMoon'>
      <div className='howlingMoonContainer'>
      <div className='header'>
        <h1>HOWLING <br></br>MOON</h1>
        <p>
          BOOTCAMP FINAL<br></br>PROJECT
        </p>
      </div>
        <img src={HowlingMoonImg} className='howlingMoonImage'></img>
        <div className='bottom'>
          <h1><AiOutlineArrowDown/></h1>
          <p>
            SAY GOODBYE TO
            <br></br>
            SCATTERED NOTES AND
            <br></br>
            FRAGMENTED IDEAS.
          </p>
          {/* <h1>PEDRO <br></br>TASCA</h1> */}
        </div>
      </div>
    </section>
  );
};

export default HowlingMoon;
