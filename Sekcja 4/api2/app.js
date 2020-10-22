// // http://numbersapi.com/random/year?hson

// const fetch = require('node-fetch');

// // co wpisalismy? 

// // console.log(process.argv)

// const year = process.argv[2] || Math.floor(Math.random() * 2020);

// console.log(year)

// fetch(`http://numbersapi.com/1990/${year}?json`)
//     .then(response => {
//         console.log(response.status);
//         console.log(response.ok);
//         return response.json()
//     })
//     .then(data => console.log(data.text))
//     .catch(error => console.log("eeerrrorrrryyy", error))

// ZADANIE 2

// `http://numbersapi.com/${number}/${type}?json`

// console.log(process.argv)

const fetch = require('node-fetch')

const arg = process.argv[2];

let type = ""

if (arg.indexOf("--year") === 0) {
    console.log("szukamy rokuuuuuuu")
    type = "year";
}
else if (arg.indexOf("--math") === 0) {
    console.log("szukamy o liczbieeeee");
    type = "math"
}
else if (arg.indexOf("--trivia") === 0) {
    console.log("szukamy cieakkkaawostki");
    type = "trivia"
}

const equalSign = arg.search('=')
// console.log(equalSign)
if (equalSign === -1) console.log("nie wpisales liczby");

const number = arg.slice(equalSign + 1) || 1
// console.log(number)

// if (number === "" || isNaN(Number(number))) {
//     console.log("TO NIE LICZBA!! ");
//     process.exit()
// }

fetch(`http://numbersapi.com/${number}/${type}?json`)
    .then(response => {
        if (response.ok) {
            return response.json()
        } else throw new Error("łooo panieee cos nie tak, błąd: " + response.status)


        console.log("cos jest nie tak...", response.status)
    })
    .then(response => console.log(response.text))
    .catch(err => console.log("Błąd", err))