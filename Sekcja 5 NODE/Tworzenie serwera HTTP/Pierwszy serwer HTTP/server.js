const http = require('http');

http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    // resp.write("<h1> Cześć   </h1>")
    resp.end(`
    <h1> Good morning</h1>
    <script src="./code.js"></script>  
    `)
}).listen(3000, '127.0.0.1')