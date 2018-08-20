const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/Car');

// Initialize server
const app = express();

// Initialize database
// Connect to Mongo within the request.
app.use(bodyParser.urlencoded({ extended: true}));

// [ PUBLIC ] - For static assets
app.use(express.static(__dirname + "/public"));

// [GET - Request cars]
app.get('/cars', (req, res, next) => {
    var resultArray = [];
    mongoose.connect(keys.mongoURI, function(err, db) {
        var cursor = db.collection('fancycars').find();
        cursor.forEach((doc, err) => {
            resultArray.push(doc);
        }, function() {
            db.close();
            res.status(200).send(resultArray);
        });    
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening on Port 3000');
});