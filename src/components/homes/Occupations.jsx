import React from 'react';
import Typewriter from 'typewriter-effect';

function Occupations() {
  return (
    <Typewriter
      options={{
        strings: ['Full-Stack Developer', 'Freelancer', 'Tech Enthusiast'],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Occupations;
