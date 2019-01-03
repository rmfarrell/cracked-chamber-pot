import React, { Component } from 'react'
import './styles/vars.css'
import './styles/global.css'
import styles from './styles/App.module.css'
import Navigo from 'navigo'
import Gallery from './Gallery'
import Header from './Header'
import fetch from 'isomorphic-fetch'
import { client, printMapper, fetchPrints } from './contentful'

const ACCESS_TOKEN = 'fb7b553b6f6e423674b0f9e323bc5d561148245d2727840b8732c66f7172ae53',
  SPACE_ID = 'bmgi0b085usv',
  contentful = client(SPACE_ID, ACCESS_TOKEN),
  router = new Navigo(null, true);

// https://dbgnfp6gtb006.cloudfront.net/fit-in/300x400/filters:fill(00ff00):rotate(90)/pressages.jpg
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      page: 0,
      isFiltered: false,
      showFilters: false,
      openIndex: null,
      filters: {

      }
    }
  }

  componentDidMount() {

    // exmaple of a filter
    // contentful.getEntries({
    //   'fields.artist': 'James Gillray',
    //   'content_type': 'print'
    // })
    //   .then(console.log)
    //   .catch((e) => {
    //     console.log(e)
    //   })
    getUnfilteredData()
      .then((items) => this.setState({ items }))
      .catch(console.error)

    router.on({
      '/detail/:id': ({ id }) => {
        this.setState({ view: 'detail' })
      },
      '/filters': () => {
        this.setState({ view: 'filters' })
      },
      '*': () => {
        this.setState({ view: '' })
      }
    })
      .resolve();
  }

  toggleFilters = () => {
    const showFilters = !this.state.showFilters
    this.setState({ showFilters })
    showFilters ? router.navigate('/filters') : router.navigate('/')
  }

  updateFilters = (filters) => {
    this.setState({ filters })
  }

  openItem = (idx) => {
    this.closeItems()
    const items = this.state.items.slice(0)
    items[idx].active = true;
    this.setState({ items })
  }

  closeItems = () => {
    this.setState({
      items: this.state.items.map(item => {
        item.active = false
        return item
      })
    })
  }

  resfreshPage = () => {
    this.setState({
      page: ++this.page
    }, (err) => getUnfilteredData(this.page))
  }

  render() {
    return (
      <div className={[
        styles.root,
        styles[this.state.view]
      ].join(' ')}>
        <Header
          toggleFilters={this.toggleFilters}
          filters={this.state.filters}
          updateFilters={this.state.updateFilters}
          open={this.state.showFilters}
        />
        <Gallery
          items={this.state.items}
          closeItems={this.closeItems}
          openItem={this.openItem}
        />
      </div>
    );
  }
}

function getUnfilteredData(num = 0) {
  return fetch(`./data/page-${num}.json`)
    .then(res => res.json())
}

export default App;
