const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  short_desc: {
    type: String,
    
  },
  long_desc: {
    type: String,
    
  },
  price: {
    type: Number,
    default: 0,
  },
  units: {
    type: String,
    
  },
  image: {
    type: String,
    required: true,
    
  },
  category: [{
    type: String,
    required: true,
  }],
  rating: {
    type: Number,
    default: 0,
  },
});

const Product = model('Product', productSchema);

module.exports = Product;