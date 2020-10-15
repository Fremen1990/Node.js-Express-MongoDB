// http://numbersapi.com/random/year?hson

const fetch = require('node-fetch');

// co wpisalismy? 

// console.log(process.argv)

const year = process.argv[2];
console.log(year)

fetch('http://numbersapi.com/1990/year?hson')