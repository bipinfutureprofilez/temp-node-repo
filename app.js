
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('You are on Homepage')
    }
    else if (req.url === '/about') {
        res.write('You are on about page')
    }
    else if (req.url === '/contact') {
        res.write('You are on contact page')
    }
    else {
        res.write(`<h1>Oops</h1><p>No Found Pages</p><a href="/">Back Homepage</a>`)
    }
    res.end()
})

server.listen(5000)


