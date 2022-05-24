// 37:45 

const express = require('express')
app = express()

var url = require('url');
var dt = require('./date-time');

const port = process.env.PORT || 3000
const majorVersion = 1
const minorVersion = 2

// Use Express to publish static HTML, CSS, and JavaScript files that run in the browser. 
app.use(express.static(__dirname + '/static'))

//HTML quiz app on the server
app.get('/html', (request, response) => {
	app.use(express.static(__dirname + '/html'))
    response.sendFile(path.join(__dirname + '/html/index.html'))
})

//CSS quiz app on the server
app.get('/css', (request, response) => {
	app.use(express.static(__dirname + '/css'))
    response.sendFile(path.join(__dirname + '/css/index.html'))
})

//Bootstrap quiz app on the server
app.get('/css', (request, response) => {
	app.use(express.static(__dirname + '/bootstrap'))
    response.sendFile(path.join(__dirname + '/bootstrap/index.html'))
})

//Algorithms and Data Structures quiz app on the server
app.get('/css', (request, response) => {
	app.use(express.static(__dirname + '/algorithmsanddatastructures'))
    response.sendFile(path.join(__dirname + '/algorithmsanddatastructures/index.html'))
})

// Custom 404 page.
app.use((request, response) => {
  response.type('text/plain')
  response.status(404)
  response.send('404 - Not Found')
})

// Custom 500 page.
app.use((err, request, response, next) => {
  console.error(err.message)
  response.type('text/plain')
  response.status(500)
  response.send('500 - Server Error')
})

app.listen(port, () => console.log(
  `Express started at \"http://localhost:${port}\"\n` +
  `press Ctrl-C to terminate.`)
)
