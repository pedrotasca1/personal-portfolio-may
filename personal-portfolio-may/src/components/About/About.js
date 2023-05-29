import React from 'react';
import './About.scss';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function About() {
  return (
    <section className='aboutSection' id='about'>
      <div className='AboutContainer'>
        <h1>
        ABOUT<br></br>ME
        </h1>
        <div className='bottomText'>
          <p className='aboutContent'>
            Aliquip adipisicing voluptate amet reprehenderit aliquip aute incididunt quis sint nostrud. Non esse excepteur ipsum et nisi nulla labore quis elit fugiat sit aliqua laborum. Irure quis aute pariatur sint cillum Lorem nulla enim minim. Mollit est laborum sint in aute veniam ad ullamco anim in elit.
            Aliquip adipisicing voluptate amet reprehenderit aliquip aute incididunt quis sint nostrud. Non esse excepteur ipsum et nisi nulla labore quis elit fugiat sit aliqua laborum. Irure quis aute pariatur sint cillum Lorem nulla enim minim. Mollit est laborum sint in aute veniam ad ullamco anim in elit.
            Aliquip adipisicing voluptate amet reprehenderit aliquip aute incididunt quis sint nostrud. Non esse excepteur ipsum et nisi nulla labore quis elit fugiat sit aliqua laborum. Irure quis aute pariatur sint cillum Lorem nulla enim minim. Mollit est laborum sint in aute veniam ad ullamco anim in elit.
          </p>

          <div className='aboutLinkContainer'>
            <a href='https://github.com/pedrotasca1' target='_blank' rel="noreferrer">
              <FaGithub size={40} className='aboutLinkLogo'/>
            </a>

            <a href='https://www.linkedin.com/in/pedro-tasca-35718297/' target='_blank' rel="noreferrer">
              <FaLinkedin size={40} className='aboutLinkLogo'/>
            </a>
          </div>

        <h4 className='aboutBackgroundImage'>*</h4>
        </div>
      </div>
    </section>
  );
}

export default About;
