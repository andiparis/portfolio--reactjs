// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import ProjectItemDesc from './ProjectItemDesc';
import ProjectItemImg from './ProjectItemImg';

function ProjectItem({ name, tech, description, github, deploy, img, order }) {
  if (order % 2 === 1) {
    return (
      <div className="projects-card">
        <ProjectItemDesc
          name={name}
          tech={tech}
          description={description}
          github={github}
          deploy={deploy}
        />
        <ProjectItemImg name={name} img={img} />
      </div>
    );
  } else {
    return (
      <div className="projects-card">
        <ProjectItemImg name={name} img={img} />
        <ProjectItemDesc
          name={name}
          tech={tech}
          description={description}
          github={github}
          deploy={deploy}
        />
      </div>
    );
  }
}

ProjectItem.propTypes = {
  name: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  deploy: PropTypes.string,
  img: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
};

export default ProjectItem;
