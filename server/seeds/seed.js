const mongoose = require('mongoose');
const Product = require('../models/Product');
const seedProducts = require('./product.json')

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://gammahazard:green123@cluster0.td4e5.mongodb.net/dknstore?authSource=admin&replicaSet=atlas-ik8t4x-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedDB = async () => {
	await Product.deleteMany({});
	await Product.insertMany(seedProducts);
};

seedDB().then(() => {
	console.log(seedProducts)
	mongoose.connection.close();
})
