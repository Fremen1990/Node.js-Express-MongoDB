const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser');

const app = express();

app.listen(4000, () => {
    console.log("YOU ARE LISTENING ON http://localhost:4000")
})


app.use(express.json())
app.use(express.static(
    path.join(__dirname, 'static')
))
/////cookie read
app.use(cookieParser())

app.post('/hello', (req, res) => {

    const { name, surnmae } = req.body;

    res.send(`Hi ${name, surnmae} !!!! :) `)

})


app.get('/', (req, res) => {
    console.log(req.cookies)
    res.send("sbbdtb")
})

app.get('/hi/:name', (req, res) => {
    // res.send("trataatata")

    const { name } = req.params;

    const date = new Date();

    date.setDate(date.getDate() + 7)

    res.cookie('visitor_name', name, {
        expires: date,
    });
    res.send('name has been saved')
})
