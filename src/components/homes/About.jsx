import React from 'react';
import { Row, Col } from 'react-bootstrap';

function About() {
  return (
    <Row style={{ paddingBottom: '50px' }}>
      <Col className="home-about-description">
        <p className="home-about-body mx-5 px-5">
          Hello! I'm Andi, a{' '}
          <span className="purple">Full-Stack Developer</span> specializing in
          CodeIgniter, Laravel, and ReactJS.
          <br />
          <br />
          I'm passionate about staying updated with the latest technologies and
          recently delved into the world of Artificial Intelligence.
          <br />
          <br />I thrive on the challenge of integrating cutting-edge
          advancements into my projects to create innovative solutions that make
          a positive impact.
        </p>
      </Col>
    </Row>
  );
}

export default About;
