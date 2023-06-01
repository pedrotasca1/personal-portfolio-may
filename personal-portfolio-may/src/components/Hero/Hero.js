/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Hero.scss'
import HeroImage from "./HeroImage.png";
import Arrow from '../../Arrow.png';
// import { useSpring, animated } from '@react-spring/web'

import FadeInSection from '../../visual-effects/FadeInSection';



function Hero() {
  const scrollTo = (target) => {
    const targetElement = document.querySelector(target);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
        timingFunction: 'cubic-bezier(0.4, 0.8, 0.2, 1)',
      });
    }
  };

  return (
    <section className='hero'>
      <FadeInSection>
        <div className='heroContainer'>
          <div className='heroHeader'>
            <h1 >CREATIVE <br></br>DEVELOPER</h1>
            <img src={HeroImage} className='heroImage'></img>
          </div>

          <div className='heroPageBottom'>
            <div
              className={'arrow'}

              onClick={() => scrollTo('#howlingMoon')}
            >
              <img src={Arrow}/>
            </div>

            <p >
              HEAVELY INTERESTED
              <br></br>
              IN UX/UI DESIGN &
              <br></br>
              FRONT END DEVELOPMENT
            </p>
            <h1  className={'heroBottomTitle'}>PEDRO<br></br>*TASCA</h1>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Hero;
