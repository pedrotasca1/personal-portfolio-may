/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './UIExperiment.scss';
import UIExperimentImg from './Frame 2.png';
// import { useSpring, animated } from '@react-spring/web';
import { FaFigma } from "react-icons/fa";
import ShadowArrow from './ShadowArrow.png'


function UIExperiment() {
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
    <section className='experimentSection' id='UIExperiment'>
      <div className='experimentContainer'>


        <div className='experimentHeader'>
          <div>
            <h1 class={'experimentHeaderText'}>UI STUDY <br></br>CASE</h1>

            <p class={'experimentHeaderParagraph'}>
              EXPERIMENTAL PROJECT<br></br>APPROACHING UI DESIGN
            </p>
          </div>


          <div className='experimentLinkContainer'>
            <div className={'experimentGithub'}>
              <a href='https://www.figma.com/file/bi3UOdVCkuoHmUv5incjpJ/GREVE-E-SHOP?type=design&node-id=85%3A546&t=cWMmrNw5Xv01xYMD-1' target='_blank' rel="noreferrer">
                <FaFigma size={40} className='experimentLinkLogo'/>
              </a>
            </div>
          </div>
        </div>

        <a href='https://www.figma.com/proto/bi3UOdVCkuoHmUv5incjpJ/GREVE-E-SHOP?node-id=1-2&scaling=scale-down' target='_blank' rel='noreferrer'>
        <img src={UIExperimentImg} className='experimentImage'></img>
        </a>

        <div className='experimentPageBottom'>
          <div
            className={'experimentArrow'}
            onClick={() => scrollTo('#about')}
          >
            <img src={ShadowArrow} />
          </div>

          <div className='bottomRightContainer'>

          <p className={'experimentBottomSentence'}>
            SAY GOODBYE TO
            <br></br>
            SCATTERED NOTES AND
            <br></br>
            FRAGMENTED IDEAS.
          </p>


          </div>
        </div>
      </div>
    </section>
  );
};

export default UIExperiment;
