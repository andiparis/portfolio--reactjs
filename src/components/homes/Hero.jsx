import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Occupations from './Occupations';

function Hero({ hero }) {
  return (
    <Container className="home-content">
      <Row>
        <Col md={7} className="align-self-center">
          <h1 className="heading" style={{ paddingBottom: 15 }}>
            Hi there!{' '}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <h1 className="heading-name">
            I'm <strong className="main-name">Andi Paris Bachtiar</strong>
          </h1>
          <div style={{ padding: 50, textAlign: 'left' }}>
            <Occupations />
          </div>
        </Col>
        <Col md={5}>
          <img
            src={hero.img}
            alt="Hero"
            className="img-fluid"
            loading="lazy"
            style={{ maxHeight: '500px' }}
          />
        </Col>
      </Row>
    </Container>
  );
}

Hero.propTypes = {
  hero: PropTypes.object.isRequired,
};

export default Hero;
