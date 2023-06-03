import React from 'react';
import "./Navbar.scss";
import { animated, useSpring } from '@react-spring/web'
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

  const springProps = useSpring({
    to: { scrollTop: 0 },
    config: { mass: 1, tension: 280, friction: 60 },
    onFrame: (props) => {
      window.scrollTo(0, props.scrollTop);
    },
  });

  return (
      <div className='navbarContainer'>
        <ul className='navList'>
          <li className='navListItem'><img src={ Logo } alt='logo'></img></li>
          <li className='navListItem'>
            Currently looking for an opportunity
            <br />
            within the industry
          </li>
          <li className='navListItem'>Based in London, England</li>
          <ul className='navListLinks'>
            <animated.li onClick={() => scrollTo('#howlingMoon')} className={'navListItem listItem'} style={springProps}>Work</animated.li>
            <li className='navListItem'>,&nbsp;</li>
            <animated.li onClick={() => scrollTo('#about')} className={'navListItem listItem'} style={springProps}>About</animated.li>
            <li className='navListItem'>,&nbsp;</li>
            <animated.li className={'navListItem listItem'} style={springProps}>Contact</animated.li>
          </ul>
        </ul>
      </div>
  );
};

export default Navbar;
