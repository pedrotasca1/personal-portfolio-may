/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Hero.scss'
import HeroImage from "./HeroImage.png";
import Arrow from '../../Arrow.png';

import FadeInSection from '../../visual-effects/FadeInSection';
import { useSpring, animated } from 'react-spring';

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

  const springProps = useSpring({
    to: { scrollTop: 0 },
    config: { mass: 1, tension: 280, friction: 60 },
    onFrame: (props) => {
      window.scrollTo(0, props.scrollTop);
    },
  });

  return (
    <section className='hero'>
      <FadeInSection>
        <div className='heroContainer'>
          <div className='heroHeader'>
            <h1><span className="h1Spam">&#60;</span>CREATIVE <br></br>DEVELOPER<span className="h1Spam">&#62;</span></h1>
            <img src={HeroImage} className='heroImage'></img>
          </div>

          <div className='heroPageBottom'>
            <animated.div
              className={'arrow'}
              style={springProps}
              onClick={() => scrollTo('#howlingMoon')}
            >
              <img src={Arrow}/>
            </animated.div>

            <p >
              HEAVELY INTERESTED
              <br></br>
              IN UX/UI DESIGN &
              <br></br>
              FRONT END DEVELOPMENT
            </p>
            <h1  className={'heroBottomTitle'}>PEDRO<br></br><span className='h1Spam'>*</span>TASCA</h1>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Hero;
