import React from 'react';
import './About.scss';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import FadeInSection from '../../visual-effects/FadeInSection';



function About() {
  return (
    <section  className='aboutSection' id='about'>
      <FadeInSection>
        <div className='AboutContainer'>
          <div className='aboutContainerContent'>
            <div className='aboutHeader'>
              <h1>ABOUT<br></br>ME</h1>
              <div className='aboutLinkContainer'>
                  <a href='https://github.com/pedrotasca1' target='_blank' rel="noreferrer">
                    <FaGithub size={40} className='aboutLinkLogo'/>
                  </a>

                  <a href='https://www.linkedin.com/in/pedro-tasca-35718297/' target='_blank' rel="noreferrer">
                    <FaLinkedin size={40} className='aboutLinkLogo'/>
                  </a>
              </div>
            </div>
            <p>LOOKING FOR AN<br></br>INTERNSHIP/ JUNIOR ROLE</p>
            <div className='bottomText'>
              <div></div>
              <p className='aboutContent'>
              An aspiring frontend web developer and UI designer with a strong passion for creating visually captivating and user-friendly websites. Recently, I successfully completed a comprehensive web development bootcamp, where I gained a solid foundation in HTML, CSS, JavaScript, and the principles of UI/UX design. With a keen eye for detail and a dedication to creating seamless user experiences, I am now eagerly seeking a junior role in the industry to further develop my skills, contribute to exciting projects, and continue my journey towards becoming a skilled professional in the world of web development.
              </p>
                <h4 className='aboutBackgroundImage'>*</h4>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}

export default About;
