import PropTypes from 'prop-types'
import React from 'react'
import avatar from '../images/avatar.jpeg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img className="avatar" src={avatar} alt="avatar" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Hi, I'm Murilo =)</h1>
        <p>
          Just a Brazilian fella, trying to change the world, spreading
          positivity and love all around, and if you are reading this, why not
          give me a shout ?Still trying to figure out the reason I am here,
          always with a "can do" thinking. I love explore new technologies,
          cultures and places. I am a software developer on my spare time as
          well, always trying to make people's lives easier through technology.
          Result oriented. "We" over "I". But also very concerned about clean
          code and good practices. Composition over Inheritance.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
