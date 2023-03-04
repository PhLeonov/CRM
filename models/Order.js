const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  list:{
    ref: 'categories',
    type: Schema.Types.ObjectId
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  },
});

module.exports = mongoose.model('order', orderSchema);
