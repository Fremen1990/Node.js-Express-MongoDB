const request = require('request')

// `http://api.nbp.pl/api/exchangerates/rates/a/${code}/`

const validCodes = ['usd', 'gbp', 'eur', 'chf'];

const code = process.argv[3]