// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function ProjectItemImg({ name, img }) {
  return <img src={img} alt={name} loading="lazy" className="project-pic" />;
}

ProjectItemImg.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ProjectItemImg;
