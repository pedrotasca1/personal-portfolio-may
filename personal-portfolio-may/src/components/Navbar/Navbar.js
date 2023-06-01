import React from 'react';
import "./Navbar.scss";
import { animated } from '@react-spring/web'
import Logo from '../../Logo.png'

function Navbar() {
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
      <div className='navbarContainer'>
        <ul className='navList'>
          <li className='navListItem'><img src={ Logo }></img></li>
          <li className='navListItem'>
            Currently looking for an opportunity
            <br />
            within the industry
          </li>
          <li className='navListItem'>Based in London, England</li>
          <ul className='navListLinks'>
            <animated.li onClick={() => scrollTo('#howlingMoon')} className={'navListItem listItem'}>Work,</animated.li>
            <animated.li onClick={() => scrollTo('#about')} className={'navListItem listItem'}>About,</animated.li>
            <animated.li className={'navListItem listItem'}>Contact</animated.li>
          </ul>
        </ul>
      </div>
  );
};

export default Navbar;
