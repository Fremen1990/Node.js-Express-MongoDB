const express = require('express');

const app = express();

app.listen(4000, () => {
    console.log("You are listening on port http://localhost:4000")
})

app.get('/', (req, res) => {
    res.send("WORKING!!")
})