import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Stack, Badge } from 'react-bootstrap';
import { SiGithub } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';

function ProjectCard({ name, tech, description, github1, github2, demo, img }) {
  return (
    <Card className="project-card-view">
      <Card.Img
        src={img}
        alt="Project Image"
        variant="top"
        loading="lazy"
        crossOrigin="anonymous"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Stack
          direction="horizontal"
          gap={2}
          className="justify-content-center m-3"
          style={{ flexWrap: 'wrap' }}
        >
          {tech.map((tech, index) => (
            <Badge key={index} pill bg="warning" text="dark">
              {tech}
            </Badge>
          ))}
        </Stack>
        <Card.Text style={{ textAlign: 'justify' }}>{description}</Card.Text>
        <div className="d-flex justify-content-center gap-3">
          <Button href={github1} target="_blank" variant="primary">
            <SiGithub />
            &nbsp; {github2 === null ? 'GitHub' : 'GitHub-BE'}
          </Button>

          {github2 !== null ? (
            <Button href={github2} target="_blank" variant="primary">
              <SiGithub />
              &nbsp; GitHub-FE
            </Button>
          ) : (
            ''
          )}

          {demo && (
            <Button href={demo} target="_blank" variant="primary">
              <CgWebsite />
              &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  github1: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ProjectCard;
