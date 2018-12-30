import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/vars.css'
import './styles/global.css'
import styles from './styles/Print.module.css'

const urlBase = 'https://dbgnfp6gtb006.cloudfront.net',
  maxHeight = 320,
  maxWidth = 320

class Print extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const size = randomizeSize()
    return (
      <article className={styles.root}>
        <figure className={styles.frame}>
          <img
            alt={this.props.title}
            src={`${urlBase}/fit-in/${size}x${size}/${this.props.image}.jpg`} />
        </figure>
      </article>
    );
  }
}

export default Print;

function randomizeSize() {
  return 200 + parseInt(Math.random() * 200)
}
