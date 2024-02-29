import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../components/layouts/Particle';
import ProjectCard from '../components/projects/ProjectCard';
import { getProjectsData } from '../utils/data';

function Projects() {
  const projects = getProjectsData();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Past <span className="purple">Projects</span>
        </h1>
        <Row className="justify-content-center pb-2">
          {projects.map((project, index) => (
            <Col md={6} xs={12} className="project-card">
              <ProjectCard key={index} {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
