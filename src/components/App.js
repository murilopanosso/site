import React from 'react';
import PropTypes, { elementType } from 'prop-types';
import { Container } from 'react-bootstrap';

import Header from './Header';
import Footer from './Footer';
import ResumeAvatar from './Resume/ResumeAvatar';
import './Resume/ResumeAvatarStyle.css';


const App = ({ children }) => (
  <div>
    <Header />
    <Container>
      <div className="avatar">
        <ResumeAvatar />
      </div>
      <div className="name-title"><h3>Murilo Panosso</h3></div>
    </Container>
    <div>
      {children}
    </div>
    <Footer />
  </div>
);

App.propTypes = {
  children: PropTypes.instanceOf(elementType).isRequired,
};

export default App;
