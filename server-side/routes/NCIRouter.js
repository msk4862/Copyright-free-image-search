const express = require('express')
const request = require ('request')
var async = require('async');
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const NCIRouter = express.Router()
NCIRouter.use(bodyParser.json())
//for reading .env file
dotenv.config()

const imageCount = 50

NCIRouter.route('/')

.get((req, res, next) => {
    async.parallel({
        unsplash: function(callback) {
            var url = 'https://api.unsplash.com/search/photos/?query='+req.query.img+
            '&per_page='+imageCount

            var headers = {
                'Authorization': `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`
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
            var url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}`+
            `&q=${req.query.img}&per_page=`+imageCount

            request.get( {url: url} , function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    callback(null, body)
                } else {
                    callback(error, {})
                }
            });
        },

        pexels: function(callback) {
            var url = 'https://api.pexels.com/v1/search?query='+req.query.img+'&per_page='+imageCount+'&page=2'

            var headers = {
                'Authorization' : process.env.REACT_APP_PEXELS_API_KEY
            }

            request.get({url, headers}, function(error, response, body) {
                if(!error && response.statusCode == 200) {
                    callback(null, body)
                } else {
                    callback(error, null);
                }
            });
        }
    }, function(err, results) {
        // result is now equals to: {one: 1, two: 2}

        if(!err) {
            pexels = JSON.parse(results.pexels).photos
            pixImgs = JSON.parse(results.pixabay).hits
            upImgs = JSON.parse(results.unsplash).results
            
            imgs = []

            //Pexels
            for (img in pexels) {
                imgs.push({
                    id: pexels[img].id,
                    url: pexels[img].url,
                    tags: null,
                    src: pexels[img].src.medium
                })
            }
            
            //Pixabay
            for (img in pixImgs) {
                imgs.push({
                    id: pixImgs[img].id,
                    url: pixImgs[img].pageURL,
                    tags: pixImgs[img].tags,
                    src: pixImgs[img].webformatURL
                })
            }

            //Unsplash
            for (img in upImgs) {
                imgs.push({
                    id: upImgs[img].id,
                    url: upImgs[img].links.html,
                    tags: upImgs[img].alt_description,
                    src: upImgs[img].urls.regular
                })
            }

            shuffleArray(imgs)
            console.log(imgs.length)
            
            res.writeHead(200, {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            });
            res.end(JSON.stringify(imgs));
        }
        else {
            res.json({'error': err})
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

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

module.exports = NCIRouter