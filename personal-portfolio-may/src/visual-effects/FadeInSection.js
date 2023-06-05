/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';

const FadeInSection = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  return <div className="fade-in-section" ref={sectionRef}>{children}</div>;
};

export default FadeInSection;

