import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import CardTravelOutlinedIcon from '@material-ui/icons/CardTravelOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Amdocs from '../images/amdocs.png'
import Beblue from '../images/beblue.png'
import IBM from '../images/ibm.png'
import SPCM from '../images/spcm.png'
import NineI from '../images/9i.png'
import Randox from '../images/randox.png'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">      
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2">
            Present
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          <img className="img-timeline" src={Randox} alt="" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography>
              Randox - Software Engineer
            </Typography>
            Working with C# on new features, platform maintainability and gathering materials and technologies to apply on a new web platform.

            Main Responsibilities:

            - Conduct Analysis and development of new features as well as system maintenance;

            - Perform code reviews of features developed by other engineers;

            - Elaborate documentation of new features and enhance existing ones to comply with regulations;

            - Perform researches and develop POC’s for bleeding edge products;

            - Working heavily with unit and integration tests to reach high code coverage standards;

            - Perform end to end tests.
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2">
            September/2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          <img className="img-timeline" src={Beblue} alt="" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography>
              Beblue - Squad Leader
            </Typography>
            Working essentially leading the team and conducting technical and business meetings. Presenting estimates and results to C level.

            Main Responsibilities:

            - Take part on business meetings to evaluate the technical aspects of a potential new feature;

            - Evaluate how valuable a potential new feature would be for the business from a technical point of view;

            - Participate on grooming meetings with product and design team to break the feature on user stories and evaluate the effort on dev team and the impact on the whole system;

            - Conduct Refining and Planning meetings with the dev team;

            - Mentor intermediate and Junior developers;

            - Monitor and ensure the availability of the services under my responsibility;

            - Heavily working with AWS;

            - Ensure all services comply the standards the company;

            - Conduct one-on-one meetings with developers to collect and give feedback;

            - Perform Analyses of pull requests;

            - Lead a multidisciplinary team;

            - Conduct technical interviews;

            - Hold meetings and analyze technical quality of outsourced teams;

            - Conduct Sprint Retrospective meetings alongside with the Agile Master and Product Owner;

            - Inspire the team;

          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2">
            January/2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          <img className="img-timeline" src={Beblue} alt="" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography>
              Beblue - Senior Front End Engineer
            </Typography>
            Working with React, Redux, Java and Spring, mainly on new features and mentoring Junior and Intermediate developers, also conducting Back End tasks when it was necessary, which gave me the opportunity to be the technical reference of the team, since I was able to perform operations on the whole stack.

              Main Responsibilities:

              - Analysis and development mainly of new features;

              - Ensure quality and maintainability of the code;

              - Help the team to analyse Pull Requests

              - Mentor intermediate and Junior developers;

              - Ensure high availability of the services;

              - Participate on refining and planning meetings;

          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2">
            June/2018
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <img className="img-timeline" src={Amdocs} alt="" />
          </TimelineDot>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography>
            AMDOCS - Front End Engineer
            </Typography>
            Working wit Front h React, Redux, Java and Spring on projects for leading telecom companies in Brazil such NET and VIVO.

            Main Responsibilities:

            - Analysis and development of new features;

            - Perform operations of maintainability on existing products;

            - Participate on refining and planning meetings;

            - Support customers on site;

            - Follow up User Acceptance Tests on site to give immediate support in case bugs and defects found;
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2">
            August/2016
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <img className="img-timeline" src={NineI} alt="" />
          </TimelineDot>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography>
              9i - Full Stack Engineer
            </Typography>
            Working with JS, Java and Play Framework mainly on greenfield projects. We built the online platform to the end user manage accounts and also the payment engine.<br />

            - Gather requirements from customers;<br />

            - Analysis and development mainly of new features;<br />

            - Analyse Pull Requests;<br />

            - Participate on Planning Meetings;<br />

            - Participate on Retrospective Meetings;<br />

          </Paper>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2">
          August/2015
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
           <img className="img-timeline" src={IBM} alt="" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography>
              IBM Dublin - Summer Internship
            </Typography>
            I joined the ethical hacking team, where I could follow procedures of scanning servers and web sites, searching for vulnerabilities and the opportunity to exploit it.
          </Paper>
        </TimelineContent>
      </TimelineItem>



      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2">
            June/2015
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <CardTravelOutlinedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography>
              Science Without Borders Scholarship
            </Typography>
            Science Without Borders
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2">
            June/2014
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <img className="img-timeline" src={SPCM} alt="" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography>SiplanControlM - Junior Software Engineer</Typography>
            Working with C# and Delphi I had the opportunity to help the company maintain the existing projects and even create one of the flagship products.
          </Paper>
        </TimelineContent>
      </TimelineItem>

          <Typography variant="body2">
            October/2012
          </Typography>

    </Timeline>
  );
}
