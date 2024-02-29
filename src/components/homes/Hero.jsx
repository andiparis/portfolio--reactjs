import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Occupations from './Occupations';

function Hero({ hero }) {
  return (
    <Container className="home-content">
      <Row>
        <Col className="home-header" md={7}>
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
        <Col md={5} style={{ paddingBottom: 20 }}>
          <img
            src={hero.img}
            alt="Hero"
            className="img-fluid"
            style={{ maxHeight: '450px' }}
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
