// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function SkillItem({ name, img, style }) {
  const iconStyles = style.icon + ' icon-card';

  return (
    <div className={iconStyles}>
      <img src={img} alt={name} loading="lazy" className={style.iconSvg} />
      <span className="icon-text">{name}</span>
    </div>
  );
}

SkillItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default SkillItem;
