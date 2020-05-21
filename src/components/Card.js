import React, { Component } from 'react'
import '../assets/css/card.css'

export default class Card extends Component {
  render() {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img class="card-img" src={this.props.cardImage} alt="" />
          </div>
          <div className="flip-card-back">
            <p>{this.props.backText}</p>
          </div>
        </div>
      </div>
    )
  }
}
