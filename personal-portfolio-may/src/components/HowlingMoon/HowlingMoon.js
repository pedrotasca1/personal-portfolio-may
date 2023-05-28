/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './HowlingMoon.scss'
import Arrow from '../../Arrow.png';
import HowlingMoonImg from './Images.png';
import { useSpring, animated } from '@react-spring/web';
import { AiFillGithub } from "react-icons/ai";


function HowlingMoon() {
  const textAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
    delay: 300,
  });

  const imageAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
    delay: 600,
  });

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
    config: { tension: 150, friction: 25, },
    duration: 5000,
    delay: 5,
  });

  return (
    <section className='howlingMoon' id='howlingMoon'>
      <div className='howlingMoonContainer'>
      <div className='header'>
        <animated.h1 style={textAnimation}>HOWLING <br></br>MOON</animated.h1>
        <div className='subtitle'>
        <animated.p style={textAnimation}>
          BOOTCAMP FINAL<br></br>PROJECT
        </animated.p>
        <animated.a href='https://github.com/LucasNseyep/howling-moon' target='_blank' rel="noreferrer" style={textAnimation}>
        <AiFillGithub size={40} className='github'/>
        </animated.a>
        </div>
      </div>
        <animated.img src={HowlingMoonImg} className='howlingMoonImage' style={imageAnimation}></animated.img>
        <div className='bottom'>
          <animated.div
            className={'arrow'}
            style={arrowAnimation}
            onClick={() => scrollTo('#howlingMoon')}
          >
            <animated.img style={textAnimation} src={Arrow} />
          </animated.div>
          <animated.p style={textAnimation}>
            SAY GOODBYE TO
            <br></br>
            SCATTERED NOTES AND
            <br></br>
            FRAGMENTED IDEAS.
          </animated.p>
          {/* <h1>PEDRO <br></br>TASCA</h1> */}
        </div>
      </div>
    </section>
  );
};

export default HowlingMoon;
