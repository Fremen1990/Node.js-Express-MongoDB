const http = require('http')
const fs = require('fs');
const path = require('path')
const port = process.env.PORT || 5000;

const users = [
    { name: "Adam", id: 1 },
    { name: "Ewa", id: 2 },
]


http.createServer((req, res) => {

    res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });

    switch (req.url) {

        case '/':
            fs.readFile(path.join(__dirname, "index.html"), (error, page) => {

                if (error) res.end("<h1>FILE DOWNLOAD FAILED</h1>")
                else res.end(page)
            })
            // res.end("<h1>The Main Page</h1>")
            break;
        case '/users':
            fs.readFile(path.join(__dirname, "users.html"), (error, page) => {
                if (error) res.end("<h1>FILE DOWNLOAD FAILED</h1>")
                else res.end(page)
            })
            // res.end("<h1>Users Page</h1>")
            break;
        case '/api/users':
            res.writeHead(200, { 'Content-type': 'application/json; charset=utf-8' });
            const usersJSON = JSON.stringify(users)
            res.end(usersJSON);
            break;

        case '/code.js':
            res.writeHead(200, { 'Content-type': 'application/javascript; charset=utf-8' });
            fs.readFile(path.join(__dirname, "script.js"), (error, page) => {

                if (error) res.end("<h1>FILE DOWNLOAD FAILED</h1>")
                else res.end(page)
            })

            break;

        default:
            res.end("<h1>Page does not exist!! </h1>")

    }


}).listen(port, '127.0.0.1', () => {
    console.log(`Our server is listening ${port}`)
})