import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './HeaderStyle.css';

const renderLinks = (path) => {
  if (path.includes('experience')) {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link className="item-selected" to="/experience">Experiences</Link>
        <a target="blank" href="https://github.com/murilopanosso/site">(src)</a>
      </div>
    );
  }

  return (
    <div>
      <Link className="item-selected" to="/">Home</Link>
      <Link to="/experience">Experiences</Link>
      <a target="blank" href="https://github.com/murilopanosso/site">(src)</a>
    </div>
  );
};

const Header = () => {
  const location = useLocation();
  return (
    <div className="header">
      {renderLinks(location.pathname)}
    </div>
  );
};


export default Header;
