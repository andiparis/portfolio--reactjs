// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function Social({ name, link, img }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img src={img} alt={name} loading="lazy" className="socicon" />
    </a>
  );
}

Social.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Social;
