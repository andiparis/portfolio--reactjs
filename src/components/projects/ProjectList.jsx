// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

function ProjectList({ projects }) {
  let order = 1;

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Some of my Past Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} order={order++} />
        ))}
      </div>
    </section>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectList;
