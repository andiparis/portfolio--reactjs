// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import SkillItem from './SkillItem';

function SkillList({ skills }) {
  const primarySkills = skills.filter((skill) => skill.primary === true);
  const secondarySkills = skills.filter((skill) => skill.primary === false);
  const primaryStyles = {
    icon: 'icon-md',
    iconSvg: 'icon-svg-md',
  };
  const secondaryStyles = {
    icon: 'icon-sm',
    iconSvg: 'icon-svg-sm',
  };

  return (
    <section className="skills" id="skills">
      <h2 className="skill-header">My Skills</h2>
      <div className="skills-wrapper">
        <div className="first-set animate__animated animate__pulse">
          <div className="skills-container">
            {primarySkills.map((skill) => (
              <SkillItem key={skill.id} style={primaryStyles} {...skill} />
            ))}
          </div>
          <div className="skills-container">
            {secondarySkills.map((skill) => (
              <SkillItem key={skill.id} style={secondaryStyles} {...skill} />
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
