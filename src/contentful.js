const contentful = require('contentful');

function fetchPrints(client, skip = 0, limit = 12) {
  if (!client) {
    throw new Error('client is required')
  }
  return client
    .getEntries({
      skip,
      limit,
      order: '-sys.createdAt'
    })
}

function printMapper({ fields = {} }) {
  return fields
}

function client(space, accessToken) {
  return contentful.createClient({
    space,
    accessToken
  });
}

module.exports = {
  fetchPrints,
  printMapper,
  client
}
