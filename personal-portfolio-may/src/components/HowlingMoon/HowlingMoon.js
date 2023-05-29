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
    <section className='howlingMoonSection' id='howlingMoon'>
      <div className='howlingMoonContainer'>
        <div className='howlingMoonHeader'>
          <animated.h1 class={'howlingMoonHeaderText'} style={textAnimation}>HOWLING <br></br>MOON</animated.h1>
          <animated.p class={'howlingMoonHeaderParagraph'} style={textAnimation}>
            BOOTCAMP FINAL<br></br>PROJECT
          </animated.p>
        </div>
        <animated.img src={HowlingMoonImg} className='howlingMoonImage' style={imageAnimation}></animated.img>
        <div className='howlingMoonPageBottom'>

          <animated.div
            className={'arrow'}
            style={arrowAnimation}
            onClick={() => scrollTo('#howlingMoon')}
          >
            <animated.img style={textAnimation} src={Arrow} />
          </animated.div>

          <div className='bottomRightContainer'>

          <animated.p style={textAnimation} className={'howlingMoonBottomSentence'}>
            SAY GOODBYE TO
            <br></br>
            SCATTERED NOTES AND
            <br></br>
            FRAGMENTED IDEAS.
          </animated.p>

            <animated.div style={textAnimation} className={'howlingMoonGithub'}>
              <a href='https://github.com/LucasNseyep/howling-moon' target='_blank' rel="noreferrer">
                <AiFillGithub size={40} className='githubLogo'/>
              </a>

            </animated.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowlingMoon;
