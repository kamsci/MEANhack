var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  product: String,
  items: String,
  description: String,
  media: [{
    mediaType: String,
    url: String
  }]
});

module.exports = mongoose.model('Product', ProductSchema);
