// http://numbersapi.com/random/year?hson

const fetch = require('node-fetch');

// co wpisalismy? 

// console.log(process.argv)

const year = process.argv[2];
// console.log(year)

fetch(`http://numbersapi.com/1990/${year}?json`)
    .then(response => {
        console.log(response.status);
        console.log(response.ok);
        return response.json()
    })
    .then(data => console.log(data.text))
    .catch(error => console.log("eeerrrorrrryyy", error))