import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Stack, Badge } from 'react-bootstrap';
import { SiGithub } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';

function ProjectCard({ project }) {
  return (
    <Card className="project-card-view">
      <Card.Img
        src={project.img}
        alt="Project Image"
        variant="top"
        loading="lazy"
        crossOrigin="anonymous"
      />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Stack
          direction="horizontal"
          gap={2}
          className="justify-content-center m-3"
          style={{ flexWrap: 'wrap' }}
        >
          {project.tech.map((tech, index) => (
            <Badge key={index} pill bg="warning" text="dark">
              {tech}
            </Badge>
          ))}
        </Stack>
        <Card.Text style={{ textAlign: 'justify' }}>
          {project.description}
        </Card.Text>
        <Button href={project.github} target="_blank" variant="primary">
          <SiGithub />
          &nbsp; GitHub
        </Button>

        {project.demo && (
          <Button
            href={project.demo}
            target="_blank"
            variant="primary"
            style={{ marginLeft: '1rem' }}
          >
            <CgWebsite />
            &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;
