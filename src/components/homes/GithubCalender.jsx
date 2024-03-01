import React from 'react';
import GitHubCalender from 'react-github-calendar';
import { Row } from 'react-bootstrap';

function GithubCalender() {
  return (
    <Row
      className="col-md-10 justify-content-center m-auto text-white text-center"
      style={{ paddingBottom: '50px' }}
    >
      <GitHubCalender
        username="andiparis"
        blockSize={16}
        blockMargin={7}
        errorMessage="Fetching GitHub data failed!"
      />
    </Row>
  );
}

export default GithubCalender;
