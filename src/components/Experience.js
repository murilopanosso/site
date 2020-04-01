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
      <Card
        className="card-root"
        style={{
          margin: '0 auto', border: '0px',
        }}
      >
        <Card.Body>
          <div className="section-title">
            <div className="pipe"><h4>_</h4></div>
            <div><h4>Professional Experience</h4></div>
          </div>
          <Card.Title style={{ textAlign: 'justify', fontSize: '20px' }}>
            {'>'}
            {' '}
            Randox - Software Engineer (From Oct/2019 - Present)
          </Card.Title>
          <Card.Text style={{ textAlign: 'justify', fontSize: '18px' }}>
            Working with C# on new features, platform maintainability and gathering materials and
            technologies to apply on a new web platform.
          </Card.Text>
          <Card.Text style={{ textAlign: 'justify', fontSize: '16px' }}>
            <p>Main Responsibilities:</p>
            <p>- Conduct Analysis and development of new features as well as system maintenance;</p>
            <p>- Perform code reviews of features developed by other engineers; </p>
            <p>
              - Elaborate documentation of new
              features and enhance existing ones to comply with regulations;
            </p>
            <p>- Perform researches and develop POC’s for bleeding edge products;</p>
            <p>- Working heavily with unit and integration tests to reach high code coverage standards;</p>
            <p>- Perform end to end tests.</p>

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
          <Card.Text>
            <p>Main Responsibilities:</p>
            <p>- Take part on business meetings to evaluate the technical aspects of a potential new feature;</p>
            <p>- Evaluate how valuable a potential new feature would be for the business from a technical point of view;</p>
            <p>- Participate on grooming meetings with product and design team to break the feature on user stories and evaluate the effort on dev team and the impact on the whole system;</p>
            <p>- Conduct Refining and Planning meetings with the dev team;</p>
            <p>- Mentor intermediate and Junior developers;</p>
            <p>- Monitor and ensure the availability of the services under my responsibility;</p>
            <p>- Heavily working with AWS;</p>
            <p>- Ensure all services comply the standards the company;</p>
            <p>- Conduct one-on-one meetings with developers to collect and give feedback;</p>
            <p>- Perform Analyses of pull requests;</p>
            <p>- Lead a multidisciplinary team;</p>
            <p>- Hold meetings and analyze technical quality of outsourced teams;</p>
            <p>- Conduct Sprint Retrospective meetings alongside with the Agile Master and Product Owner;</p>
            <p>
              - Inspire the team
              {'<3'}
              ;
            </p>
          </Card.Text>
          <Card.Title>
            {'>'}
            {' '}
            Beblue - Senior Front End Engineer (From Jun/2018 to Jan/2019)
          </Card.Title>
          <Card.Text style={{ textAlign: 'justify' }}>
            Working with React, Redux, Java and Spring,
            mainly on new features and mentoring Junior and Intermediate developers,
            also conducting Back End tasks when it was necessary,
            which gave me the opportunity to be the technical reference of the team,
            since I was able to perform operations on the whole stack.
          </Card.Text>
          <Card.Text>
            <p>Main Responsibilities:</p>
            <p>- Analysis and development mainly of new features;</p>
            <p>- Ensure quality and maintainability of the code;</p>
            <p>- Help the team to analyse Pull Requests</p>
            <p>- Mentor intermediate and Junior developers;</p>
            <p>- Ensure high availability of the services;</p>
            <p>- Participate on refining and planning meetings;</p>

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
          <Card.Text>
            <p>Main Responsibilities:</p>
            <p>- Analysis and development of new features;</p>
            <p>- Perform operations of maintainability on existing products;</p>
            <p>- Participate on refining and planning meetings;</p>
            <p>- Support customers on site;</p>
            <p>- Follow up User Acceptance Tests on site to give immediate support in case bugs and defects found;</p>

          </Card.Text>
          <Card.Title>
            {'>'}
            {' '}
            9i - Full Stack Engineer (From Oct/2015 to Jul/2016)
          </Card.Title>
          <Card.Text style={{ textAlign: 'justify' }}>
            Working with JS, Java and Play Framework mainly on greenfield projects.
            We built the online platform to the end user manage accounts
            and also the payment engine.
          </Card.Text>
          <Card.Text>
            <p>- Gather requirements from customers;</p>
            <p>- Analysis and development mainly of new features;</p>
            <p>- Analyse Pull Requests;</p>
            <p>- Participate on Planning Meetings;</p>
            <p>- Participate on Retrospective Meetings;</p>

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
            SiplanControlM - Junior Software Engineer (From Oct/2012 to Jun/2014)
          </Card.Title>
          <Card.Text style={{ textAlign: 'justify' }}>
            Working with C# and Delphi I had the opportunity to help the
            company maintain the existing projects and even create one of the
            flagship products of the company.
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
      </Card>
    </div>
  );
};

export default Experience;
