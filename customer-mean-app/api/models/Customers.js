const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Customer = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String
  },
  email: {
    type: String
  }
},{
  collection: 'Customers'
});

module.exports = mongoose.model('Customer', Customer);
