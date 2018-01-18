var bodyParser = require('body-parser');
var express = require('express');
var Twit = require('twit');

var app = express();

app.use(bodyParser.json());

var twitter = new Twit({
    consumer_key: TWITTER_CONSUMER_KEY,
    consumer_secret: TWITTER_CONSUMER_SECRET,
    app_only_auth: true
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
