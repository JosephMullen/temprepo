// npm - global command
// npm --version

//local dependency (for this project)
// npm i <packageName>

//global depedency - use on any project
//npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json, create properties, etc)
// npm init (step by step, enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, 4]]]
const newItems = _.flattenDeep(items)
console.log(newItems)
