const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h1>Hello world! Welcome to the website created by Node.js! czad :D :)  </h1>');
}).listen(3000, '127.0.0.1')