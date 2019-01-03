import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/vars.css'
import './styles/global.css'
import styles from './styles/Detail.module.css'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidUpdate() {
    console.log(this.props)
  }


  render() {
    return (
      <article className={[this.root, this.props.show ? 'show' : ''].join(' ')}>
        <h1>{this.props.title}</h1>
      </article>
    );
  }
}

export default Detail;
