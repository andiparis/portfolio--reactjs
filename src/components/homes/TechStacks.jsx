import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import {
  SiCss3,
  SiPhp,
  SiJavascript,
  SiCodeigniter,
  SiLaravel,
  SiNodedotjs,
  SiReact,
  SiMui,
  SiMysql,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { FaJava, FaBootstrap } from 'react-icons/fa';

function TechStacks({ stacks }) {
  const icons = [
    <SiCss3 />,
    <SiPhp />,
    <SiJavascript />,
    <FaJava />,
    <SiCodeigniter />,
    <SiLaravel />,
    <SiNodedotjs />,
    <SiReact />,
    <FaBootstrap />,
    <SiMui />,
    <SiMysql />,
    <SiGit />,
    <SiGithub />,
  ];

  return (
    <Row
      className="col-md-10 justify-content-center m-auto"
      style={{ paddingBottom: '50px' }}
    >
      {stacks.map((stack, index) => (
        <Col key={index} className="tech-icons" lg={2} md={3} xs={4}>
          {icons[index]}
          <span className="stacks-text">{stack.name}</span>
        </Col>
      ))}
    </Row>
  );
}

TechStacks.propTypes = {
  stacks: PropTypes.array.isRequired,
};

export default TechStacks;
