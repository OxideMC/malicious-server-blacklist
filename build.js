const { jsonc } = require('jsonc')
const { writeFileSync, readFileSync } = require('fs')

writeFileSync('./blacklist.json', JSON.stringify(jsonc.parse(readFileSync('./blacklist.jsonc').toString())))