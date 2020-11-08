const express = require('express')
const path = require('path')

const app = express();

const port = 4000

app.listen(port, () => {
    console.log(`you are listening on port http://localhost:${port}`)
})

app.get('/', (req, res) => {
    console.log("dziala to!!")

    const fileName = 'index.html'

    res.sendFile(fileName, { root: path.join(__dirname, 'static') })


})

app.get('/logo', (req, res) => {

    const fileName = 'logo.png'

    res.sendFile(fileName, { root: path.join(__dirname, 'static') })
})

app.get('/attachment', (req, res) => {

    const fileName = 'logo.png'

    res.attachment(fileName, { root: path.join(__dirname, 'static') })
    res.end()
})

app.get('/download', (req, res) => {

    const fileName = path.join(__dirname, 'static/logo.png')

    res.download(fileName, 'gowno kupa.png')
})