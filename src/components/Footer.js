import React from 'react';
import { Card, Image } from 'react-bootstrap';

import faceImage from '../static/img/facebook.png';
import githubImage from '../static/img/github.png';
import linkedinImage from '../static/img/linkedin.png';
import emailImage from '../static/img/email.png';

const Footer = () => (
  <Card>
    <Card.Body style={{ textAlign: 'center' }}>
      <footer>
        <a target="blank1" href="https://www.linkedin.com/in/murilo-panosso">
          <Image src={linkedinImage} style={{ height: '50px', width: '50px', padding: '10px' }} rounded />
        </a>
        <a target="blank2" href="https://github.com/murilopanosso">
          <Image src={githubImage} style={{ height: '50px', width: '50px', padding: '10px' }} rounded />
        </a>
        <a target="blank3" href="https://www.facebook.com/murilo.panosso">
          <Image src={faceImage} style={{ height: '50px', width: '50px', padding: '10px' }} rounded />
        </a>
        <a href="mailto:murilopanosso@gmail.com">
          <Image src={emailImage} style={{ height: '50px', width: '50px', padding: '10px' }} rounded />
        </a>
      </footer>
    </Card.Body>
  </Card>
);

export default Footer;
