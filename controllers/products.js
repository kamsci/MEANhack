var express = require('express');
var Product = require('../models.product');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Product.find(function(err, products) {
      if (err) return res.status(500).send(err);
      return res.send(products);
    });
  })
  .post(function(req, res) {
    Product.create(req.body, function(err, product) {
      if (err) return res.status(500).send(err);
      return res.send(product);
    });
  });

  router.route('/:id')
    .get(function(req, res) {
      Product.findById(req.params.id, function(err, recipe) {
        if (err) return res.status(500).send(err);
        return res.send(product);
      });
    });

    module.exports = router;
