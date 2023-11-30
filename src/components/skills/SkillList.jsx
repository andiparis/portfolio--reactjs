// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import SkillItem from './SkillItem';

function SkillList({ skills }) {
  return (
    <section className="skills" id="skills">
      <h2 className="skill-header">My Skills</h2>
      <div className="skills-wrapper">
        <div className="first-set animate__animated animate__pulse">
          <div className="skills-container">
            {skills.map((skill) => (
              <SkillItem key={skill.id} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

SkillList.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default SkillList;
