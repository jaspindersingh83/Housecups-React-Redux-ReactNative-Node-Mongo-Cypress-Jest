const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mascot: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    students: [],
    score: {
        type: Number,
        required: true
    },
    createdOn: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('House', HouseSchema);

