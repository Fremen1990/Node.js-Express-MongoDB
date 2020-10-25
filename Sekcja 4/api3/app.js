const request = require('request')
const fs = require('fs')

// `http://api.nbp.pl/api/exchangerates/rates/a/${code}/`

const validCodes = ['usd', 'gbp', 'eur', 'chf'];

const code = process.argv[2];

const isValid = validCodes.find(currency => currency === code) ? true : false;

console.log(isValid)

const url = `http://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`

console.log(url)

request(url, { json: true }, (err, res, body) => {

    if (err) {
        return console.log("ERROR", err)
    }
    if (res.statusCode !== 200) {
        return console.log("something wrong, please check URL")
    }
    console.log(res.statusCode)

    // console.log(body)
    const message = `Average rate ${body.currency} for day ${body.rates[0].effectiveDate} is ${body.rates[0].mid} PLN`

    fs.appendFile('currencies.txt', message + '\n', (err) => {
        console.log("Currency rate has been added to the file")
    })

    console.log(message)
})