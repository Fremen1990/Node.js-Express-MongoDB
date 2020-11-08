const express = require('express');

const app = express();

app.listen(4000, () => {
    console.log(`listening on port http://localhost:4000`)
})

app.get('/', (req, res) => {
    res.send("MAIN PAGE")
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

app.get('/logout', (req, res) => {

    res.clearCookie('visitor_name')

    res.redirect('/')

})