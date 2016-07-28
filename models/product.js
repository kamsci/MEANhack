var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  title: String,
  product: String,
  description: String,
  image: String,
  video: String
});

module.exports = mongoose.model('Product', ProductSchema);

module.exports = Product;
