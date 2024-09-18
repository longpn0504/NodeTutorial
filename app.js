//npm -global command, come with node
//npm --version

//local dependency - only use it in a particular project 
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json
//npm init -y

const _ = require('lodash')
const items = [1, [2,[3, [4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)