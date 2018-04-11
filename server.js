//require('dotenv').config() // Uncomment for use in local environment
const axios = require('axios')
const transactionGenerator = require('./handlers/transaction_generator.js')

setInterval(function () {
    axios.post(process.env.TRANSACTION_URL, {
        data: transactionGenerator()
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}, 2000)