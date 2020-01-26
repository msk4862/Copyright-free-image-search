var express = require('express')
const http = require('http')
const logger = require('morgan')
const bodyPasrser = require('body-parser')
const cors = require('cors')

const NCIRouter = require('./routes/NCIRouter')

const hostname = 'localhost'
const port = process.env.PORT
const app = express()

app.use(cors());
//applying middlewares using use()
app.use(logger('dev'));
app.use(bodyPasrser.json())

app.use('/images', NCIRouter)
app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
  console.log(req.headers)
  res.statusCode = 200
  res.setHeader('Content-Type', 'test/html')
  res.end('<html><body>Hello from this side!!!</body></html>')
})

const server = http.createServer(app)
server.listen(port, hostname, ()=> {
  console.log(`Server running at http://${hostname}:${port}`)
})
