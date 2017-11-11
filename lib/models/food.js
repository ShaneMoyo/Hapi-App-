const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var foodSchema = new Schema({
    name: String
});

module.exports = mongoose.model('food', foodSchema);