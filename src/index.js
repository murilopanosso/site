import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import Resume from './components/Resume/Resume';
import Experience from './components/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <BrowserRouter>
    <App>
      <div>
        <Route path="/" exact component={Resume} />
        <Route path="/experience" component={Experience} />
      </div>
    </App>
  </BrowserRouter>,
  document.querySelector('#root'),
);
