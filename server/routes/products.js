const express = require('express');
const productRoutes = express.Router();
const dbopen = require('../../config/connection');
const ObjectId = require('mongodb')


//product route
productRoutes.route('/routes/products').get(function(req, res){
	let db_connect = dbopen.getDb('inventory');
	db_connect
		.collection('products')
		.find({})
		.toArray(function(err, result){
			if(err) throw err;
			res.json(result);
		});
});

//product by id
productRoutes.route('./routes/products/:id').get(function(req, res){
	let db_connect = dbopen.getDb();
	let myquery = { _id: ObjectId( req.params.id)};
	db_connect
		.collection('products')
		.findOne(myquery, function (err, result){
			if (err) throw err;
			res.json(result);
		});
});

//post a product, require admin??
productRoutes.route("/routes/products/add").post(function (req, response) {
	let db_connect = dbopen.getDb();
	let myobj = {
	  name: req.body.name,
	  //just name for now, other product props later
	};
	db_connect.collection("products").insertOne(myobj, function (err, res) {
	  if (err) throw err;
	  response.json(res);
	});
});

//delete a product by id , require admin ???
productRoutes.route("/routes/:id").delete((req, response) => {
	let db_connect = dbopen.getDb();
	let myquery = { _id: ObjectId( req.params.id )};
	db_connect.collection("products").deleteOne(myquery, function (err, obj) {
	  if (err) throw err;
	  console.log("1 product deleted");
	  response.json(obj);
	});
  });


  module.exports = productRoutes; 