import React, { useRef } from 'react';
import {
  Card, Row, Col, Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SkillCard from './SkillCard';
import ResumeConsts from './ResumeConsts';


import jsImage from '../../static/img/js.png';
import javaImage from '../../static/img/java.png';
import cSharpImage from '../../static/img/cSharp.png';
import reactImage from '../../static/img/react.png';
import vueImage from '../../static/img/vue.png';
import springImage from '../../static/img/spring.png';
import giImage from '../../static/img/gi.png';
import travelImage from '../../static/img/travel.png';
import stocksImage from '../../static/img/stocks.png';
import archImage from '../../static/img/arch.png';
import zshImage from '../../static/img/zsh.png';
import jetbrainsImage from '../../static/img/jetbrains.png';

import './ResumeBody.css';


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const ResumeBody = () => {
  const myref = useRef(null);
  const executeScrollToRef = () => scrollToRef(myref);
  return (
    <div>
      <Card style={{ width: '100%', border: '0px', padding: '20px' }}>
        <Card.Body>
          <Card.Title>
            <div className="section-title">
              <div className="pipe"><h4>_</h4></div>
              <div><h4>Who Am I ?</h4></div>
            </div>
          </Card.Title>
          <Card.Text style={{ textAlign: 'justify' }}>
            Just a Brazilian fella,
            trying to change the world,
            spreading positivity and love all around,
            and if you are reading this,
            why not give me a
            {' '}
            <span
              role="button"
              className="link"
              onClick={executeScrollToRef}
              onKeyPress={() => {}}
              tabIndex={0}
            >
              shout
            </span>
            {' '}
            ?

            {`Still trying to figure out the reason I am here,
            always with a "can do" thinking.
            I love explore new technologies, cultures and places.

            I am a software developer on my spare time as well,
            always trying to make people's lives easier through technology.
            Result oriented. "We" over "I". But also very concerned about clean code and good practices. Composition over Inheritance.`}
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Title>
            <div className="section-title">
              <div className="pipe"><h4>_</h4></div>
              <div><h4>A few things about me</h4></div>
            </div>
          </Card.Title>
          <Row style={{ textAlign: 'center', paddingTop: '20px' }}>
            <Col className="card-container" xs={12} sm={12} xl={4}>
              <SkillCard cardImage={travelImage} backText={ResumeConsts.travel} />
            </Col>
            <Col className="card-container" xs={12} sm={12} xl={4}>
              <SkillCard cardImage={stocksImage} backText={ResumeConsts.stock} />
            </Col>
            <Col className="card-container" xs={12} sm={12} xl={4}>
              <SkillCard cardImage={giImage} backText={ResumeConsts.bjj} />
            </Col>
          </Row>
        </Card.Body>

        <Card.Body>
          <div className="section-title">
            <div className="pipe"><h4>_</h4></div>
            <div><h4>Profesional</h4></div>
          </div>
          <Card.Text style={{ textAlign: 'justify' }}>
            A set of tools and technologies that I use on daily basis,
            or I have experience working with.
          </Card.Text>
          <Row style={{ textAlign: 'center', paddingTop: '20px' }}>
            <Col className="card-container" xs={12} sm={12} xl={4}>
              <SkillCard cardImage={jsImage} backText={ResumeConsts.js} />
            </Col>
            <Col className="card-container" xs={12} sm={12} xl={4}>
              <SkillCard cardImage={javaImage} backText={ResumeConsts.java} />
            </Col>
            <Col className="card-container" xs={12} sm={12} xl={4}>
              <SkillCard cardImage={cSharpImage} backText={ResumeConsts.cSharp} />
            </Col>
          </Row>
          <Row style={{ textAlign: 'center', paddingTop: '20px' }}>
            <Col className="card-container" xs={12} sm={12} xl={4}>
              <SkillCard cardImage={reactImage} backText={ResumeConsts.react} />
            </Col>
            <Col className="card-container" xs={12} sm={12} xl={4}>
              <SkillCard cardImage={vueImage} backText={ResumeConsts.vue} />
            </Col>
            <Col className="card-container" xs={12} sm={12} xl={4}>
              <SkillCard cardImage={springImage} backText={ResumeConsts.spring} />
            </Col>
          </Row>
        </Card.Body>


        <Card.Body>
          <div className="section-title">
            <div className="pipe"><h4>_</h4></div>
            <div><h4>Personal</h4></div>
          </div>
          <Card.Text style={{ textAlign: 'justify' }}>
            My personal choice of tools that I use on my own projects.
          </Card.Text>
          <Row style={{ textAlign: 'center', paddingTop: '20px' }}>
            <Col className="card-container" xs={12} sm={12} xl={4}>
              <SkillCard cardImage={archImage} backText={ResumeConsts.arch} />
            </Col>
            <Col className="card-container" xs={12} sm={12} xl={4}>
              <SkillCard cardImage={zshImage} backText={ResumeConsts.zsh} />
            </Col>
            <Col className="card-container" xs={12} sm={12} xl={4}>
              <SkillCard cardImage={jetbrainsImage} backText={ResumeConsts.jetbrains} />
            </Col>
          </Row>
        </Card.Body>

        <Card.Body>
          <div className="section-title">
            <div className="pipe"><h4>_</h4></div>
            <div><h4>Discover more...</h4></div>
          </div>
          <Card.Text style={{ textAlign: 'justify' }}>
            Would you like to discover more about my education and professional experience ?
          </Card.Text>
          <Col className="more-container" xs={12} sm={12} xl={12}>
            <Link className="link-more" to="/experience">
              <Button variant="outline-secondary" block>Click Here</Button>
            </Link>
          </Col>
        </Card.Body>
      </Card>
      <div ref={myref} />
    </div>
  );
};

export default ResumeBody;
