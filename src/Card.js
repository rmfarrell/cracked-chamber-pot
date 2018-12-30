import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/vars.css'
import './styles/global.css'
import styles from './styles/Card.module.css'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const size = randomizeSize()
    return (
      <figcaption className={styles.root}>
        <em><strong>{this.props.title}</strong></em>, {this.props.artist}
      </figcaption>
    );
  }
}

export default Card;

function randomizeSize() {
  return 200 + parseInt(Math.random() * 200)
}
