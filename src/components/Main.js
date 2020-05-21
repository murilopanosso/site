import PropTypes from 'prop-types'
import React from 'react'

import GI from '../images/gi.png'
import Travel from '../images/travel.png'
import Stocks from '../images/stocks.png'
import Card from '../components/Card'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">A few things about me</h2>

          <div className="card-container">
            <Card
              cardImage={Travel}
              backText={
                'I love to travel, discover new places and cultures, in my opinion this is one of the best investments a human being can make to care for mental and physical health.'
              }
            />
            <Card
              cardImage={GI}
              backText={
                'Jiu Jitsu is one of my hobbies, I am currently a blue belt, always striving to be better than I was yesterday, not just on JJ but everything in life. And this is the way I try to be fit.'
              }
            />
          </div>
          <div className="card-container">
            <Card
              cardImage={Stocks}
              backText={
                'I really enjoy talk about financial subjects, especially when it comes to stocks market. I love when I make a forecast about a specific stock, and it comes true months later. However I am still a beginner at this world.'
              }
            />
          </div>

          <h2 className="major">Professional</h2>

          <div className="card-container">
            <Card
              cardImage={Travel}
              backText={
                'Jiu Jitsu is one of my hobbies, I am currently a blue belt, always striving to be better than I was yesterday, not just on JJ but everything in life. And this is the way I try to be fit.'
              }
            />
            <Card
              cardImage={GI}
              backText={
                'Jiu Jitsu is one of my hobbies, I am currently a blue belt, always striving to be better than I was yesterday, not just on JJ but everything in life. And this is the way I try to be fit.'
              }
            />
          </div>

          <h2 className="major">Personal</h2>

          <div className="card-container">
            <Card
              cardImage={Travel}
              backText={
                'Jiu Jitsu is one of my hobbies, I am currently a blue belt, always striving to be better than I was yesterday, not just on JJ but everything in life. And this is the way I try to be fit.'
              }
            />
            <Card
              cardImage={GI}
              backText={
                'Jiu Jitsu is one of my hobbies, I am currently a blue belt, always striving to be better than I was yesterday, not just on JJ but everything in life. And this is the way I try to be fit.'
              }
            />
          </div>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main"></span>
          <p>
            cv
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <span className="image main"></span>
          <p>
            Projects
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
