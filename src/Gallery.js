import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles/vars.css'
import './styles/global.css'
import styles from './styles/Gallery.module.css'
import Masonry from 'react-masonry-component'
import Print from './Print'
import Card from './Card'


const masonryOptions = {
  transitionDuration: 0,
  percentPosition: true
};

class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() { }

  componentDidUpdate() {
    console.log(this.props.items)
  }

  render() {
    return (
      <Masonry
        className={styles.root} // default ''
        elementType={'div'} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      // imagesLoadedOptions={{}} // default {}
      >
        {this.props.items.map((item, idx) => {
          if (idx % 2 == 0) return (
            <Print key={item.title} {...item} />
          )
          return (

            <Card key={item.title} {...item} />
          )
        })
        }
      </Masonry>
    );
  }
}

Gallery.propTypes = {
  items: PropTypes.array.isRequired
}

export default Gallery;
