const express = require('express')
const request = require ('request')
var async = require('async');
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
    async.parallel({
        unsplash: function(callback) {
            var url = 'https://api.unsplash.com/search/photos?query=' + req.query.img;

            var headers = {
                'Authorization': 'Client-ID 2b25b83960bf91b73fd95161ff78768171fdfe41c4d55ede8d0c472c0d1402eb'
            };

            request.get( {url: url, headers: headers} , function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    callback(null, body)
                } else {
                    callback(error, {})
                }
            });
        },
        pixabay: function(callback) {
            var key = '14709044-f900eaae4148f529ec881ca47'
            var url = `https://pixabay.com/api/?key=${key}&q=${req.query.img}`;

            request.get( {url: url} , function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    callback(null, body)
                } else {
                    callback(error, {})
                }
            });
        }
    }, function(err, results) {
        // results is now equals to: {one: 1, two: 2}

        pixImgs = JSON.parse(results.pixabay).hits
        upImgs = JSON.parse(results.unsplash).results


        imgs = []
        for (img in pixImgs) {
            imgs.push({
                id: pixImgs[img].id,
                url: pixImgs[img].webformatURL,
                tags: pixImgs[img].tags,
                source: 'pixabay'
            })
        }

        for (img in upImgs) {
            imgs.push({
                id: upImgs[img].id,
                url: upImgs[img].urls.regular,
                tags: upImgs[img].alt_description,
                source: 'unsplash'
            })
        }


        shuffleArray(imgs)
        console.log(imgs.length)

        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(imgs));
      });
    

    // Streams.find({})
    // .then((streams) => {
    //     res.statusCode = 200
    //     res.setHeader('Content-type', 'application/json')
    //     res.json(streams)
    // }, (err) => next(err))                          //Passing error to parent error handler using next()
    // .catch((err) => next(err))


})

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

module.exports = NCIRouter