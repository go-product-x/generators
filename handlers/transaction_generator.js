const faker = require('faker')

const transactionGenerator = () => {
    //Data Models
    const transaction_metadata = [
        {
            payment_terminal_id: 'izet_kjhsdaf_73',
            country_code: 'SE',
            currency: 'SEK'
        },
        {
            payment_terminal_id: 'HM_liljeholm3',
            country_code: 'SE',
            currency: 'SEK'
        },
        {
            payment_terminal_id: 'could_nine_torsgatan',
            country_code: 'SE',
            currency: 'SEK'
        },
        {
            payment_terminal_id: '',
            country_code: '',
            currency: ''
        }
    ]

    //User identifiers
    const SSNs = [
        '970714-6776',
        '960601-3812',
        '450506-9874',
        '640818-6101'
    ]

    var index = 0

    //Create a random set of metadata 
    transaction_metadata[3].payment_terminal_id = faker.finance.bitcoinAddress()
    transaction_metadata[3].country_code = faker.address.countryCode()
    transaction_metadata[3].currency = faker.finance.currencyCode()
    index = Math.floor(Math.random() * (3 - 0 + 1)) + 0

    //Initiate raw transaction
    let rawTransaction = {
        id: faker.random.uuid(),
        SSN: SSNs[index],
        payment_terminal_id: transaction_metadata[index].payment_terminal_id,
        country_code: transaction_metadata[index].country_code,
        currency: transaction_metadata[index].currency,
        amount: faker.finance.amount(),
        user_id: '', 
        store: {
            store_id: '',
            store_name: ''
        }
    }

    return rawTransaction
}

module.exports = transactionGenerator