import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/vars.css'
import './styles/global.css'
import styles from './styles/Detail.module.css'
import { urlBase } from './shared'

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
      closeContainer = '',
      vertical = '',
      container = '',
      imageContainer,
      text = ''
    } = styles,
      {
        image = '',
        title = ''
      } = this.props,

      // @todo imlement height/length comparison
      isVertical = true
    return (
      <article className={[root, this.props.show ? show : ''].join(' ')}>
        <div className={closeContainer}>
          <span />
          <button onClick={this.props.close}>Close</button>
          <span />
        </div>
        <div className={[container, isVertical ? vertical : ''].join(' ')}>
          <div className={imageContainer}>
            {image && <img src={`${urlBase}/fit-in/20x20/${image}.jpg`}
              srcSet={`
                ${urlBase}/fit-in/1200x1200/${image}.jpg,
                ${urlBase}/fit-in/1000x1000/${image}.jpg,
                ${urlBase}/fit-in/900x900/${image}.jpg,
                ${urlBase}/fit-in/720x720/${image}.jpg,
                ${urlBase}/fit-in/600x600/${image}.jpg,
                ${urlBase}/fit-in/400x400/${image}.jpg
              `}
              alt={title}
            />}
          </div>
          <div className={text}>

          </div>
        </div>
      </article>
    );
  }
}

export default Detail;
