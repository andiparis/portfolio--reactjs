// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function SkillItem({ name, img }) {
  return (
    <div className="icon icon-card">
      <img src={img} alt={name} loading="lazy" className="icon-svg" />
      <span className="icon-text">{name}</span>
    </div>
  );
}

SkillItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default SkillItem;
