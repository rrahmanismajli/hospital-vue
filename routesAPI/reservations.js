var Products = require('../models/Reservation');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();


/* GET ALL Contacts */
router.get('/', function(req, res, next) {
  Products.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
  });
  
/* GET SINGLE Contacts BY ID */
router.get('/:id', function(req, res, next) {
  Products.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  /* SAVE Contacts */
router.post('/', function(req, res, next) {
  Products.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  /* UPDATE Contacts */
router.put('/:id', function(req, res, next) {
    console.log(req.body);
    Products.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* DELETE Contacts */
router.delete('/:id', function(req, res, next) {
  Products.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  module.exports = router;
