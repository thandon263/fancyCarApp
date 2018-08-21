const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/Car');

// Initialize server
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));

// [ PUBLIC ] - For static assets
app.use(express.static(__dirname + "/public"));


/***********************************/
/*       [ Controllers ]           */
/***********************************/

// [GET - Request cars]
app.get('/cars', (req, res, next) => {
    const resultArray = [];
    
    mongoose.connect(keys.mongoURI, function(err, db) {
        const cursor = db.collection('fancycars').find();
        // [ ITERATE ] - push data to results.
        cursor.forEach((data, err) => {
            resultArray.push(data);
        }, function() {
            db.close();
            res.status(200).send(resultArray);
        }, console.error(err));    
    });
});

// [GET - Available car by id]
app.get('/availability/:id', (req, res, next) => {
    const id = req.params.id; 

    mongoose.connect(keys.mongoURI, function(err, db) {
       const cursor = db.model('fancycars');
        // [Extract] - one element from the SchemaObject
       const doc = cursor.find({ carId: id }, function(err, data) {
            res.status(200).send(data);
            db.close();
       });
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Listening on Port 3000');
});