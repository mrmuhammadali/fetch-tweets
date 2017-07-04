var bodyParser = require('body-parser');
var express = require('express');
var Twit = require('twit');

var app = express();

app.use(bodyParser.json());

var twitter = new Twit({
    consumer_key: 'Iwijmt3AYmNKrcYv0ECo81wgb',
    consumer_secret: 'WBHAAkN0JOh9evaYQ4DX196IKuP2Mh9dFCfzL6Vmb0klYC6dbZ',
    access_token: '1660448016-lGcMDF8dC7TEmTxCspeozMKaDuLuqMvHXvrw5Fb',
    access_token_secret: '2NyNSgKfY9jYaoIqz8Qir33hH9cxtx1yPeVQ3Mj9w0yQw'
});

app.get('/getTweets', (req, res) => {

    var params = req.query;
    params.count = 10;

    twitter.get('search/tweets', params, (err, data) => {
        res.json(data);
    });

});

app.listen(3030, () => {
   console.log("Server started at port: 3030");
});
