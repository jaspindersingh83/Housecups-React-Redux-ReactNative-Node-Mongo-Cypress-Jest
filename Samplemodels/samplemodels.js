const mongoose = require('mongoose');

const SampleSchema = new mongoose.Schema({
    firstName: {
        type: String,
        //required: true
    },
    lastName: {
      type: String,
      //required: true
    },
    age: {
        type: Number,
        //required: true
    },
    createdOn: {
        type: Date,
        //required: false,
        default: Date.now
    }
})

module.exports = mongoose.model('Sample', SampleSchema);