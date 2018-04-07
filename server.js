const request = require('request')
const generator = require('./handlers/transaction_generator.js')

setInterval(function () {
    console.log(generator())
},1000)