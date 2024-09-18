const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/')
    {
        res.end('Welcome to our home page')
    }
    else if (req.url === '/about')
    {
        res.end('here is our history')
    }
    else 
    {
        res.end(`
    <h1>Opps</h1>
    <p>we can't seem to find the page you are looking for </p>
    <a href="/">back home </a>
    `)
    }
})

server.listen(8000)
