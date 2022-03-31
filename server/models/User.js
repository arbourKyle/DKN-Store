const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: [{
	type: Schema.Types.ObjectId,
	ref: 'Product',
  }]
  
});

const User = model('User', userSchema);

module.exports = User;