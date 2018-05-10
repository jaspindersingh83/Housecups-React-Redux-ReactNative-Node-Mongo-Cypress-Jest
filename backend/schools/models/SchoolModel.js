const mongoose = require('mongoose');

const { Schema } = mongoose;

<<<<<<< HEAD
const SchoolSchema = Schema({
=======
const SchoolSchema = new Schema({
>>>>>>> master
  name: {
    type: String,
    required: true,
  },
  admin: {
<<<<<<< HEAD
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  plan: {
    type: Schema.Types.ObjectId,
    ref: 'Plan',
=======
    type: String,
    required: true,
>>>>>>> master
  },
  teachers: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
<<<<<<< HEAD
  }], // an array of object ids that will come from the user model.
  houses: [{
    type: Schema.Types.ObjectId,
    ref: 'House',
  }], // an array of ids that will come from house model.
  location: String,
  nextPaymentDue: {
    type: Date,
  },
=======
  }],
  houses: [{
    type: Schema.Types.ObjectId,
    ref: 'House',
  }],
  location: String,
>>>>>>> master
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
