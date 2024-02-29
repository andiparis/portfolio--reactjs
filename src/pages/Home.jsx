import React from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../components/layouts/Particle';
import Hero from '../components/homes/Hero';
import About from '../components/homes/About';
import { getHeroData, getSocialsData } from '../utils/data';

function Home() {
  const hero = getHeroData();
  const socials = getSocialsData();

  return (
    <section>
      <Container id="home" className="home-section" fluid>
        <Particle />
        <Hero hero={hero} />
      </Container>
      <About socials={socials} />
    </section>
  );
}

export default Home;
