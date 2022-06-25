//Modules
// CommonJS under the hood, every file in node is a module
// Modules - Encapsulated code (Only share what we want)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
