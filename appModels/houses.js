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
    schoolID:{
        type: Schema.Types.ObjectId,
        ref: 'School',
    }, // schoolId: foreign key from the schools table 
    score: {
        type: Number,
        required: true
    },
    createdOn: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now,
      }
});

module.exports = mongoose.model('House', HouseSchema);

