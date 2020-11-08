const express = require('express');

const app = express();

app.listen(9000, () => {
    console.log("Server is listening at http://localhost:9000")
})

app.all('/', (req) => {
    // console.log("Welcome Traveller")
    console.log(req.method)
})

