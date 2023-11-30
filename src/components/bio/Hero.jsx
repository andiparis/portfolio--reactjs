// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function Hero({ hero }) {
  return (
    <section id="about" className="hero">
      <img src={hero.img} alt="Hero" loading="lazy" className="hero-img" />
      <div className="bio animate__animated animate__shakeX">
        <h2 className="bio-title">{hero.header}</h2>
        <p className="bio-text">{hero.body}</p>
      </div>
    </section>
  );
}

Hero.propTypes = {
  hero: PropTypes.object.isRequired,
};

export default Hero;
