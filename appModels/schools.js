const mongoose = require('mongoose');

const SchoolSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    principal: {
        type: String,
        required: true
    },
    principalEmail: {
        type: String,
        required: true,
        unique: true
    },
    teachers: [],
    location: String,
    createdOn: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('School', SchoolSchema);