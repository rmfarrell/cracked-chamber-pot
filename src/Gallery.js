import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/vars.css'
import './styles/global.css'
import styles from './styles/Gallery.module.css'
import Print from './Print'

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() { }

  componentDidUpdate() {
    console.log(this.props)
  }

  render() {
    return (
      <div className={styles.root}>
        {
          this.props.items.map((item, idx) => {
            return (
              <Print
                key={item.title}
                close={this.props.closeItems}
                open={this.props.openItem.bind(this, idx)}
                {...item}
              />
            )
          })
        }
      </div>
    );
  }
}

Gallery.propTypes = {
  items: PropTypes.array.isRequired
}

export default Gallery;
