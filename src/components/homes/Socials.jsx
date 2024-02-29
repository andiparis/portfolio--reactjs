import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaLinkedinIn, FaStackOverflow } from 'react-icons/fa';

function Socials({ socials }) {
  const icons = [
    <IoLogoWhatsapp />,
    <MdEmail />,
    <FaLinkedinIn />,
    <AiFillGithub />,
    <FaStackOverflow />,
  ];

  return (
    <Row>
      <Col className="home-about-social">
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
  );
}

Socials.propTypes = {
  socials: PropTypes.array.isRequired,
};

export default Socials;
