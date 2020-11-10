const express = require('express');
const path = require('path')
const gameRoutes = require('./routes/game')

const app = express();
const port = 3000;


app.listen(port, () => {
    console.log(`You are listening on port http://localhost:${port}`)
})

app.use(express.static(path.join(__dirname, 'public')))


gameRoutes(app)