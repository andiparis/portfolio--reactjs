import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Stack, Badge } from 'react-bootstrap';
import { SiGithub } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';

function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        src={props.img}
        alt="Project Image"
        variant="top"
        loading="lazy"
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Stack
          direction="horizontal"
          gap={2}
          className="justify-content-center m-3"
          style={{ flexWrap: 'wrap' }}
        >
          {props.tech.map((tech) => (
            <Badge pill bg="warning" text="dark">
              {tech}
            </Badge>
          ))}
        </Stack>
        <Card.Text style={{ textAlign: 'justify' }}>
          {props.description}
        </Card.Text>
        <Button href={props.github} target="_blank" variant="primary">
          <SiGithub />
          &nbsp; GitHub
        </Button>

        {props.demo && (
          <Button
            href={props.demo}
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
  props: PropTypes.array.isRequired,
};

export default ProjectCard;
