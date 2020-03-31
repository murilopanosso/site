import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
  <Card>
    <Card.Body style={{ textAlign: 'center' }}>
      <footer>
        <a target="blank1" href="https://www.linkedin.com/in/murilo-panosso">
          <FontAwesomeIcon style={{ height: '30px', width: '30px' }} icon={faLinkedin} color="black" />
        </a>
        <a target="blank2" href="https://github.com/murilopanosso">
          <FontAwesomeIcon style={{ height: '30px', width: '30px' }} icon={faGithubSquare} color="black" />
        </a>
        <a target="blank3" href="https://www.facebook.com/murilo.panosso">
          <FontAwesomeIcon style={{ height: '30px', width: '30px' }} icon={faFacebookSquare} color="black" />
        </a>
        <a href="mailto:murilopanosso@gmail.com">
          <FontAwesomeIcon style={{ height: '30px', width: '30px' }} icon={faEnvelopeSquare} color="black" />
        </a>
      </footer>
    </Card.Body>
  </Card>
);

export default Footer;
