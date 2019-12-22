/*
var http = require('http');
var async = require('async');
var request = require('request');


console.log('node.js application starting...');
port = 9000

var svr = http.createServer(function(req, resp) {
  // an example using an object instead of an array
  async.parallel({
    one: function(callback) {
      console.log("One");
      request('http://mocktarget.apigee.net/json', function (error, response, body) {
          if (!error && response.statusCode == 200) {
              callback(null, body);
          } else {
            callback(true, {});
          }
      });
    },
    two: function(callback) {
      console.log("Two");
      request('http://mocktarget.apigee.net/', function (error, response, body) {
          if (!error && response.statusCode == 200) {
              callback(null, body);
          } else {
            callback(true, {});
          }
      });
    },
    three: function(callback) {
      console.log("Three");
      request('https://httpbin.org/ip', function (error, response, body) {
          if (!error && response.statusCode == 200) {
              callback(null, body);
          } else {
            callback(true, {});
          }
      });
    },
    four: function(callback) {
      console.log("Four");
      request('https://httpbin.org/headers', function (error, response, body) {
          if (!error && response.statusCode == 200) {
              callback(null, body);
          } else {
            callback(true, {});
          }
      });
    }
  }, function(err, results) {
    // results is now equals to: {one: 1, two: 2}
    resp.writeHead(200, {"Content-Type": "application/json"});
    console.log(results);
    resp.end(JSON.stringify(results) + ' UGUGIUGUIGIGIIG');
  });
});


svr.listen(port, function() {
  console.log('Node HTTP server is listening at port ' + `${port}`);
});
*/

var express = require('express')
const http = require('http')
const logger = require('morgan')
const bodyPasrser = require('body-parser')
const cors = require('cors')

const NCIRouter = require('./routes/NCIRouter')

const hostname = 'localhost'
const port = 9000

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
