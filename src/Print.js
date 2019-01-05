import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/vars.css'
import './styles/global.css'
import styles from './styles/Print.module.css'
import { urlBase } from './shared'

class Print extends Component {
  constructor(props) {
    super(props)
    this.image = React.createRef();
    this.state = {
      vertical: null,
      imgLoaded: false,
      size: 0
    }
  }

  componentDidMount() {
    const img = this.image.current
    if (!img) return;
    // @todo: get this height/width calc instead!!
    img.onload = () => {
      this.setState({
        vertical: img.height < img.width
      })
      this.setState({ imgLoaded: true })
      img.onload = null;
    }
    this.setState({
      size: randomizeSize()
    })
  }

  render() {
    return (
      <article className={[
        styles.root,
        this.state.imgLoaded ? styles.loaded : '',
        this.state.vertical ? styles.vertical : styles.horizontal
      ].join(' ')}
        onClick={this.props.open}>
        <figure className={styles.frame}>
          <img
            ref={this.image}
            alt={this.props.title}
            src={`${urlBase}/fit-in/${this.state.size}x${this.state.size}/${this.props.image}.jpg`} />
        </figure>
        <figcaption>
          <div>
            <em><strong>{this.props.title}</strong></em>, {this.props.artist}
          </div>
        </figcaption>
      </article>
    );
  }
}

export default Print;

function randomizeSize() {
  return 160 + parseInt(Math.random() * 200)
}
