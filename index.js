var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var mongoose = require('mongoose')
var Product = require('./models/product');
// Identify url where database lives
mongoose.connect('mongodb://localhost/products');

// static folder to include other js, etc files
app.use(express.static(__dirname + '/public/'));
// needed to create a product!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(require('morgan')('dev'));

// controllers
app.use('/api/products', require('./controllers/products'));


// home page route
app.get('/', function(req, res) {
  res.send('Reduce Reuse Recreate');
});

// angular route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


var server = app.listen(process.env.PORT || 3000);

module.exports = server;
