/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Hero.scss'
import HeroImage from "./HeroImage.png";
import Arrow from '../../Arrow.png';
import { useSpring, animated } from '@react-spring/web'


function Hero() {
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
    config: { tension: 30, friction: 20 },
  });

  return (
    <section className='hero'>
      <div className='heroContainer'>
        <h1>CREATIVE <br></br>DEVELOPER</h1>
        <img src={HeroImage} className='heroImage'></img>
        <div className='bottom'>
          <animated.div
            className={'arrow'}
            style={arrowAnimation}
            onClick={() => scrollTo('#howlingMoon')}
          >
            <img src={Arrow} />
          </animated.div>
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
