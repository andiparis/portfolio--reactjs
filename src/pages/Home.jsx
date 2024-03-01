import React from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../components/layouts/Particle';
import Hero from '../components/homes/Hero';
import About from '../components/homes/About';
import TechStacks from '../components/homes/TechStacks';
import GithubCalender from '../components/homes/GithubCalender';
import Socials from '../components/homes/Socials';
import { getHeroData, getTechStacksData, getSocialsData } from '../utils/data';

function Home() {
  const hero = getHeroData();
  const socials = getSocialsData();
  const techStacks = getTechStacksData();

  return (
    <section>
      <Container id="home" className="home-section" fluid>
        <Particle />
        <Hero hero={hero} />

        <h1 className="project-heading">
          <span className="purple">About</span> Me
        </h1>
        <About />

        <h1 className="project-heading">
          My Tech <span className="purple">Stacks</span>
        </h1>
        <TechStacks stacks={techStacks} />

        <h1 className="project-heading">
          Days I <span className="purple">Code</span>
        </h1>
        <GithubCalender />

        <h1 className="project-heading">
          <span className="purple">Find</span> Me On
        </h1>
        <p className="text-center text-white">
          Feel free to <span className="purple">connect</span> with me
        </p>
        <Socials socials={socials} />
      </Container>
    </section>
  );
}

export default Home;
