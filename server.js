const request = require('request')
const generator = require('./handlers/transaction_generator.js')

setInterval(function () {
    //console.log(generator())
    request('https://x-transaction-handler.herokuapp.com/', (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
    })
}, 3000)