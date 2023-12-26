// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navigation from './Navigation';
import Hero from '../bio/Hero';
import SkillList from '../skills/SkillList';
import ProjectList from '../projects/ProjectList';
import Scroll from './Scroll';
import Footer from './Footer';
import {
  getHeroData,
  getProjectsData,
  getSkillsData,
  getSocialsData,
} from '../../utils/data';

function Home() {
  const hero = getHeroData();
  const skills = getSkillsData();
  const projects = getProjectsData();
  const socials = getSocialsData();

  return (
    <div>
      <Navigation />
      <Hero hero={hero} socials={socials} />
      <SkillList skills={skills} />
      <ProjectList projects={projects} />
      <Scroll />
      <Footer />
    </div>
  );
}

export default Home;
