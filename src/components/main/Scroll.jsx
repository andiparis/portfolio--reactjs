// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';

function Scroll() {
  useEffect(() => {
    const scrollUp = document.querySelector('#scroll-up');

    if (scrollUp) {
      scrollUp.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      });
    }

    // Cleanup the event listener when the component is unmounted
    return () => {
      if (scrollUp) {
        scrollUp.removeEventListener('click', () => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        });
      }
    };
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <i className="scroll-up" id="scroll-up">
      <img
        src="/assets/icons/upward-arrow.gif"
        className="socicon up-arrow"
        alt="scroll-up"
      />
    </i>
  );
}

export default Scroll;
