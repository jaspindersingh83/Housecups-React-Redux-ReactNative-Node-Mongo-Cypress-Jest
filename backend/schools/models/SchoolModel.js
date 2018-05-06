const mongoose = require('mongoose');

const { Schema } = mongoose;

const SchoolSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  admin: {
    type: String,
    required: true,
  },
  teachers: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  houses: [{
    type: Schema.Types.ObjectId,
    ref: 'House',
  }],
  location: String,
  createdOn: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('School', SchoolSchema);
