const contentful = require('contentful'),
  slugify = require('slugify')

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
  fields.slug = slugify(fields.title)
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
