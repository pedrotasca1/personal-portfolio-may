/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './UIExperiment.scss';
import WhiteArrow from './WhiteArrow.png';
import UIExperimentImg from './Frame 2.png';
import { useSpring, animated } from '@react-spring/web';
// import { AiFillGithub } from "react-icons/ai";
// import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";


function UIExperiment() {
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
    <section className='experimentSection' id='howlingMoon'>
      <div className='experimentContainer'>


        <div className='experimentHeader'>
          <div style={textAnimation}>
            <h1 class={'experimentHeaderText'}>UI STUDY <br></br>CASE</h1>

            <p class={'experimentHeaderParagraph'}>
              EXPERIMENTAL PROJECT<br></br>APPROACHING UI DESIGN
            </p>
          </div>


          <div className='experimentLinkContainer'>
            <animated.div style={textAnimation} className={'experimentGithub'}>
              <a href='https://www.figma.com/file/bi3UOdVCkuoHmUv5incjpJ/GREVE-E-SHOP?type=design&node-id=85%3A546&t=cWMmrNw5Xv01xYMD-1' target='_blank' rel="noreferrer">
                <FaFigma size={40} className='experimentLinkLogo'/>
              </a>
            </animated.div>
          </div>
        </div>

        <a href='https://www.figma.com/file/bi3UOdVCkuoHmUv5incjpJ/GREVE-E-SHOP?type=design&node-id=85%3A546&t=cWMmrNw5Xv01xYMD-1' target='_blank' rel='noreferrer'>
        <animated.img src={UIExperimentImg} className='experimentImage' style={imageAnimation}></animated.img>
        </a>

        <div className='experimentPageBottom'>
          <animated.div
            className={'experimentArrow'}
            style={arrowAnimation}
            onClick={() => scrollTo('#experiment')}
          >
            <animated.img style={textAnimation} src={WhiteArrow} />
          </animated.div>

          <div className='bottomRightContainer'>

          <animated.p style={textAnimation} className={'experimentBottomSentence'}>
            SAY GOODBYE TO
            <br></br>
            SCATTERED NOTES AND
            <br></br>
            FRAGMENTED IDEAS.
          </animated.p>


          </div>
        </div>
      </div>
    </section>
  );
};

export default UIExperiment;
