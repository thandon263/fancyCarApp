const mongoose = require('mongoose');
const { Schema } = mongoose;

const carSchema = new Schema({
    id: String,
    name: String,
    model: String,
    carId: Number,
    make: String,
    picture: String,
    available: String
});

mongoose.model('fancycars', carSchema);