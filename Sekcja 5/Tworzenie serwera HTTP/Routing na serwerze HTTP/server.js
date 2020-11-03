const http = require('http');

const port = process.env.PORT || 4000

http.createServer((req, res) => {
    res.end("sbedtgbdtbdb")

}).listen(port, '127.0.0.1', () => {
    console.log(`our server is listening port ${port}`)
})