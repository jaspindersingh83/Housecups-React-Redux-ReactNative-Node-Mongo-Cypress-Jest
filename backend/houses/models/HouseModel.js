const mongoose = require('mongoose');

const { Schema } = mongoose;

const HouseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  mascot: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  school: {
    type: Schema.Types.ObjectId,
    ref: 'School',
  },
  score: {
    type: Number,
    default: 0,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('House', HouseSchema);
