import React, { Component } from 'react'
import './styles/vars.css'
import './styles/global.css'
import styles from './styles/Header.module.css'

// https://dbgnfp6gtb006.cloudfront.net/fit-in/300x400/filters:fill(00ff00):rotate(90)/pressages.jpg
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  componentDidMount() { }

  componentDidUpdate() { }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const {
      root,
      settings_container,
      settings,
      toggle,
      open
    } = styles
    return (
      <div className={[root, this.state.isOpen ? open : ''].join(' ')}>
        <div className={settings_container}>
          <div className={settings}></div>
          <button onClick={this.toggleOpen} className={toggle}>
            {this.state.isOpen ? '-' : '+'}
          </button>
        </div>
        <h1>The Cracked Chamber Pot</h1>
      </div>
    );
  }
}

export default Header;
