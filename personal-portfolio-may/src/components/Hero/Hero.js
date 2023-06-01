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

  return (
    <section className='hero'>
      <div className='heroContainer'>
        <div className='heroHeader'>
          <animated.h1 style={textAnimation}>CREATIVE <br></br>DEVELOPER</animated.h1>
          <animated.img src={HeroImage} className='heroImage' style={imageAnimation}></animated.img>
        </div>

        <div className='heroPageBottom'>
          <animated.div
            className={'arrow'}
            style={textAnimation}
            onClick={() => scrollTo('#howlingMoon')}
          >
            <img src={Arrow}/>
          </animated.div>

          <animated.p style={textAnimation}>
            HEAVELY INTERESTED
            <br></br>
            IN UX/UI DESIGN &
            <br></br>
            FRONT END DEVELOPMENT
          </animated.p>
          <animated.h1 style={textAnimation} className={'heroBottomTitle'}>PEDRO<br></br>*TASCA</animated.h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
