/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Hero.scss'
import HeroImage from "./HeroImage.png";
import Arrow from '../../Arrow.png';
import { useSpring, animated } from '@react-spring/web'


function Hero() {
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
    <section className='hero'>
      <div className='heroContainer'>
        <animated.h1 style={textAnimation}>CREATIVE <br></br>DEVELOPER</animated.h1>
        <animated.img src={HeroImage} className='heroImage' style={imageAnimation}></animated.img>
        <div className='bottom'>
          <animated.div
            className={'arrow'}
            style={arrowAnimation}
            onClick={() => scrollTo('#howlingMoon')}
          >
            <animated.img src={Arrow} style={textAnimation}/>
          </animated.div>
          <animated.p style={textAnimation}>
            HEAVELY INTERESTED
            <br></br>
            IN UX/UI DESIGN &
            <br></br>
            FRONT END DEVELOPMENT
          </animated.p>
          <animated.h1 style={textAnimation}>PEDRO <br></br>TASCA</animated.h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
