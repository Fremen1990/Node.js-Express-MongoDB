const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log("You are listening on PORT: http://localhost:3000")
})

app.get('/', (req, res) => {
    console.log("dziala!!")

    // const string = "zażółć gęślą jaźń"
    // const array = string.split(' ')
    // res.send(array)

    // res.send({
    //     text: "Hello World!!",
    //     isGood: true,
    // })

    // res.location('/my/anothet/path')
    // res.sendStatus(302)

    res.redirect('https://google.com', 302)

})