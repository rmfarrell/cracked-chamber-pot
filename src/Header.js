import React, { Component } from 'react'
import './styles/vars.css'
import './styles/global.css'
import styles from './styles/Header.module.css'

// https://dbgnfp6gtb006.cloudfront.net/fit-in/300x400/filters:fill(00ff00):rotate(90)/pressages.jpg
class Header extends Component {

  componentDidMount() { }

  componentDidUpdate() { }

  render() {
    const {
      root,
      settings_container,
      settings,
      toggle,
      open
    } = styles
    return (
      <div className={[root, this.props.open ? open : ''].join(' ')}>
        <div className={settings_container}>
          <div className={settings}></div>
          <button onClick={this.props.toggleFilters} className={toggle}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
