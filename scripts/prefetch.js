require('dotenv').config()

const { promisify } = require('util'),
  path = require('path'),
  { writeJson, mkdirp } = require('fs-extra'),
  writeJsonAsync = promisify(writeJson),
  mkdirpAsync = promisify(mkdirp),
  space = process.env.CONTENTFUL_SPACE_ID,
  accessToken = process.env.CONTENTFUL_ACCESS_TOKEN,
  dataDir = path.join(__dirname, '../', 'public', 'data'),
  { fetchPrints, printMapper, client } = require('../src/contentful'),
  contentful = client(space, accessToken)

writeData(3, 16)

function writeData(pages = 0, itemsPerPage = 0) {

  writePage(0)

  function writePage(page) {

    mkdirpAsync(dataDir)
      .then(() => fetchPrints(contentful, page * itemsPerPage, itemsPerPage))
      .then(({ total = 0, items = [] }) => {
        return total ? items.map(printMapper) : null
      })
      .then((data) => {
        data && writeJsonAsync(
          path.join(dataDir, `page-${page}.json`),
          data,
          { flag: 'w' }
        )
        page++
        if (page < pages) {
          writePage(page)
        }
      })
      .catch(console.error)
  }
}
