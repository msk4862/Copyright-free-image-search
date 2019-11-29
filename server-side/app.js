var http = require('http');
var async = require('async');
var request = require('request');


console.log('node.js application starting...');


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
    resp.end(JSON.stringify(results));
  });
});


svr.listen(9000, function() {
  console.log('Node HTTP server is listening');
});
