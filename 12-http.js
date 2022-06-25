const http = require('http')
const { isRegExp } = require('util/types')

//Req = request, res = response
const server = http.createServer((req, res) => {
  //console.log(req)
  if (req.url === '/') {
    res.end('Welcome to our home page')
  }
  //res.write('Welcome to our homepage')
  //res.end()
  else if (req.url === '/about') {
    res.end('Here is our short story')
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back Home</a>
    `)
  }
})

server.listen(5500)
