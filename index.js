var express = require("express");

var app = express();

// [ PUBLIC ] - For static assets
app.use(express.static(__dirname, 'public'));
app.use(express.static(__dirname, 'build'));

app.listen(3000, () => {
    console.log('Listening on Port 3000');
});