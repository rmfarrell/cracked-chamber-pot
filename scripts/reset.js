const { writeJson, mkdirp } = require('fs-extra');

fs.remove('/tmp/myfile', err => {
  if (err) return console.error(err)

  console.log('success!')
})
