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
    const {
      root = '',
      show = '',
      closeContainer = ''
    } = styles
    return (
      <article className={[root, this.props.show ? show : ''].join(' ')}>
        <div className={closeContainer}>
          <span />
          <button onClick={this.props.close}>Close</button>
          <span />
        </div>
        <h1>{this.props.title}</h1>
      </article>
    );
  }
}

export default Detail;
