import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';

import './Experience.css';

const Experience = () => {
  useEffect(
    () => window.scrollTo(0, 0),
    [],
  );
  return (
    <div className="experience-container">
      <Card.Body>
        <div className="section-title">
          <div className="pipe"><h4>_</h4></div>
          <div><h4>Professional Experience</h4></div>
        </div>
        <Card.Title>
          {'>'}
          {' '}
          Randox - Software Engineer (From Oct/2019 - Present)
        </Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          Working with C# on new features, platform maintainability and gathering materials and
          technologies to apply on a new web platform.
        </Card.Text>
        <Card.Title>
          {'>'}
          {' '}
          Beblue - Squad Leader (From Jan/2019 to Sep/2019)
        </Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          Working essentially leading the team and conducting technical and business meetings.
          Presenting estimates and results  to C level.
        </Card.Text>
        <Card.Title>
          {'>'}
          {' '}
          Beblue - Senior Front End Engineer (From Jun/2018 to Jan/2019)
        </Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          Working with React, Redux, Java and Spring,
          mainly on new features and mentoring Junior and Intermediate developers.
        </Card.Text>
        <Card.Title>
          {'>'}
          {' '}
          AMDOCS - Front End Engineer (From Aug-2016 Until May-2018)
        </Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          Working wit Front h React, Redux,
          Java and Spring on projects for leading telecom companies in Brazil such NET and VIVO.
        </Card.Text>
        <Card.Title>
          {'>'}
          {' '}
          9i - Full Stack Engineer (From Oct/2015 to Jul/2016)
        </Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          Working with JS, Java and Play Framework mainly on new projects.
          We built the online platform to the end user manage accounts and also the payment engine.
        </Card.Text>
        <Card.Title>
          {'>'}
          {' '}
          IBM Dublin - Summer Internship (From Jun/2015 to Aug/2015)
        </Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          I joined the ethical hacking team, where I could follow procedures of scanning servers
          and web sites, searching for vulnerabilities and the opportunity to exploit it.
        </Card.Text>
        <Card.Title>
          {'>'}
          {' '}
          SiplanControlM - Software Engineer (From Oct/2012 to Jun/2014)
        </Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          Working with C# and Delphi I had the opportunity to help the
          company maintain the existing projects and even create one of the flagship products of the company.
        </Card.Text>
      </Card.Body>


      <Card.Body>
        <div className="section-title">
          <div className="pipe"><h4>_</h4></div>
          <div><h4>Education</h4></div>
        </div>
        <Card.Text style={{ textAlign: 'justify' }}>
          {'>'}
          {' '}
          PUC Minas University, Distributed Software Architecture,
          Specialist. From Sep-2017 Sep-2019.
        </Card.Text>

        <Card.Text style={{ textAlign: 'justify' }}>
          {'>'}
          {' '}
          Institute of Technology FATEC,
          Analysis and development of systems. From Aug-2010 until Jul-2016.
        </Card.Text>
        <Card.Text style={{ textAlign: 'justify' }}>
          {'>'}
          {' '}
          Institute of Technology Blanchardstown,
          Computer Science in digital forensics and cyber security.
          From Jun-2014 until Aug-2015 (Brazilian exchange program Science Without borders)
        </Card.Text>
      </Card.Body>

    </div>
  );
};

export default Experience;
