const express = require('express')
const request = require ('request')
const bodyParser = require('body-parser')

const NCIRouter = express.Router()
NCIRouter.use(bodyParser.json())


NCIRouter.route('/')
//always be executed (all method)
// .all((req, res, next) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     next()
// })
.get((req, res, next) => {
    console.log('Wiil pass all the streams to you.' + req.query.img)

    var url = 'https://api.unsplash.com/search/photos?query=' + req.query.img;

    var headers = {
        'Authorization': 'Client-ID 2b25b83960bf91b73fd95161ff78768171fdfe41c4d55ede8d0c472c0d1402eb'
    };

    request.get( {url: url, headers: headers} , function (error, response, body) {
          if (!error && response.statusCode == 200) {
              console.log(body)
              res.json(body)
          } else {
            (error) => next(error)
          }
      });

    // Streams.find({})
    // .then((streams) => {
    //     res.statusCode = 200
    //     res.setHeader('Content-type', 'application/json')
    //     res.json(streams)
    // }, (err) => next(err))                          //Passing error to parent error handler using next()
    // .catch((err) => next(err))


})


module.exports = NCIRouter