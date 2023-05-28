/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './HowlingMoon.scss'
import Arrow from '../../Arrow.png';
import HowlingMoonImg from './Images.png';
import { useSpring, animated } from '@react-spring/web';


function HowlingMoon() {
  const scrollTo = (target) => {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const arrowAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 2, friction: 2 },
  });

  return (
    <section className='howlingMoon' id='howlingMoon'>
      <div className='howlingMoonContainer'>
      <div className='header'>
        <h1>HOWLING <br></br>MOON</h1>
        <p>
          BOOTCAMP FINAL<br></br>PROJECT
        </p>
      </div>
        <img src={HowlingMoonImg} className='howlingMoonImage'></img>
        <div className='bottom'>
          <animated.div
            className={'arrow'}
            style={arrowAnimation}
            onClick={() => scrollTo('#howlingMoon')}
          >
            <img src={Arrow} />
          </animated.div>
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
