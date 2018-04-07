const axios = require('axios')
const generator = require('./handlers/transaction_generator.js')

setInterval(function () {
    axios.post('https://x-transaction-handler.herokuapp.com//transaction', {
        value: generator()
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}, 3000)