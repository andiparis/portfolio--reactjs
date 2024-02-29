import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaLinkedinIn, FaStackOverflow } from 'react-icons/fa';

function About({ socials }) {
  const icons = [
    <IoLogoWhatsapp />,
    <MdEmail />,
    <FaLinkedinIn />,
    <AiFillGithub />,
    <FaStackOverflow />,
  ];

  return (
    <Container id="about" className="home-about-section" fluid>
      <Container>
        <Row>
          <Col className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              <span className="purple">About</span> Me
            </h1>
            <p className="home-about-body mt-4 mx-5 px-5">
              Hello! I'm Andi, a{' '}
              <span className="purple">Full-Stack Developer</span> specializing
              in CodeIgniter, Laravel, and ReactJS.
              <br />
              <br />
              I'm passionate about staying updated with the latest technologies
              and recently delved into the world of Artificial Intelligence.
              <br />
              <br />I thrive on the challenge of integrating cutting-edge
              advancements into my projects to create innovative solutions that
              make a positive impact.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="home-about-social">
            <h1>
              <span className="purple">Find</span> Me On
            </h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              {socials.map((social, index) => (
                <li key={index} className="social-icons">
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    {icons[index]}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
