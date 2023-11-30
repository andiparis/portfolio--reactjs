// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function ProjectItemDesc({ name, tech, description, github, deploy }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{name}</h3>
      <span className="project-tech">{tech}</span>
      <p className="project-details">{description}</p>
      <a
        href={github}
        target="_blank"
        className="project-link"
        rel="noreferrer"
      >
        GitHub Repo
      </a>
      &emsp;
      {deploy !== null ? (
        <a
          href={deploy}
          target="_blank"
          className="project-link"
          rel="noreferrer"
        >
          Live Site
        </a>
      ) : null}
    </div>
  );
}

ProjectItemDesc.propTypes = {
  name: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  deploy: PropTypes.string,
};

export default ProjectItemDesc;
