import React, { Component } from 'react'
import './styles/vars.css'
import './styles/global.css'
import styles from './styles/App.module.css'
import Navigo from 'navigo'
import Gallery from './Gallery'
import Header from './Header'
import Detail from './Detail'
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
      active: '',
      filters: {}
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
      '/detail/:slug': ({ slug = '' }) => {
        this.setState({ active: slug })
      },
      '/filters': () => {
        this.setState({ showFilters: true })
      },
      '*': () => {
        this.setState({ view: '' })
        this.setState({ showFilters: false })
        this.setState({ active: '' })
      }
    })
      .resolve();
  }

  toggleFilters = () => {
    const showFilters = !this.state.showFilters
    showFilters ? router.navigate('/filters') : router.navigate('/')
  }

  updateFilters = (filters) => {
    this.setState({ filters })
  }

  setActive = (slug = '') => {
    if (!slug) {
      return;
    }
    router.navigate(`/detail/${slug}`)
  }

  resfreshPage = () => {
    this.setState({
      page: ++this.page
    }, (err) => getUnfilteredData(this.page))
  }

  closeDetail = () => {
    router.navigate('/');
  }

  render() {
    return (
      <div className={styles.root}>
        <Header
          toggleFilters={this.toggleFilters}
          filters={this.state.filters}
          updateFilters={this.state.updateFilters}
          open={this.state.showFilters}
        />
        <Gallery
          items={this.state.items}
          closeItems={this.closeItems}
          open={this.setActive}
        />
        <Detail
          {...this.state.items
            .find(({ slug = '' }) => slug === this.state.active)}
          show={!!this.state.active}
          close={this.closeDetail}
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
