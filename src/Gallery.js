import React, { Component } from 'react'
import './styles/vars.css'
import './styles/global.css'
import styles from './styles/Gallery.module.css'

const masonryOptions = {
  transitionDuration: 0
};

// https://dbgnfp6gtb006.cloudfront.net/fit-in/300x400/filters:fill(00ff00):rotate(90)/pressages.jpg
class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() { }

  componentDidUpdate() { }

  render() {
    return (
      <div className={styles.root}></div>
    );
  }
}

export default Gallery;
