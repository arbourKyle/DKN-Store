const mongoose = require('mongoose');
const Product = require('../models/Product');
const seedProducts = require('./product.json')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/dknstore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedDB = async () => {
	await Product.deleteMany({});
	await Product.insertMany(seedProducts);
};

seedDB().then(() => {
	mongoose.connection.close();
})
