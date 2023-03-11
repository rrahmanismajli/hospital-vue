var Products = require('../models/Products');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../public/static/pharmacyImages');
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    const filename = `${uuidv4()}${extension}`;
    cb(null, filename);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Only JPEG and PNG images are allowed'), false);
  }
};

const upload = multer({ storage, fileFilter });
/* GET ALL products */
router.get('/', async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

  
/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function(req, res, next) {
  Products.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  /* SAVE PRODUCT 
router.post('/', function(req, res, next) {
  Products.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });*/
  router.post('/', upload.single('image'), async (req, res) => {
    const product = new Products({
      name: req.body.name,
      price: req.body.price,
      stock: req.body.stock,
      image: req.file ? req.file.filename : null,
      added_date :Date.now(),
      author: req.body.author,
    });
  
    try {
      const newProduct = await product.save();
      res.status(201).json(newProduct);
    } catch (err) {
      if (req.file) {

        fs.unlink(`'../public/static/pharmacyImages/${req.file.filename}`, (err) => {
          if (err) {
            console.error(err);
          }
        });
      }
      res.status(400).json({ message: err.message });
    }
  });

  /* UPDATE PRODUCT */
  router.put('/:id', upload.single('photo'), getProduct, async (req, res) => {
    if (req.body.name != null) {
      res.product.name = req.body.name;
    }
  
    if (req.body.specialization != null) {
      res.product.specialization = req.body.specialization;
    }
  
    if (req.body.experience != null) {
      res.product.experience = req.body.experience;
    }
  
    if (req.file) {
     
      if (res.product.photo) {
        const filePath = `C:/Users/rrahm/OneDrive/Desktop/Betimi/hospital-vue/public/static/pharmacyImages/${res.product.photo}`;
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error(err);
          }
        });
      }
  
  
      res.product.photo = req.file.filename;
    }
  
    try {
      const updatedProduct = await res.product.save();
      res.json(updatedProduct);
    } catch (err) {
      if (req.file) {
        fs.unlink(`C:/Users/rrahm/OneDrive/Desktop/Betimi/hospital-vue/public/static/pharmacyImages/${req.file.filename}`, (err) => {
          if (err) {
            console.error(err);
          }
        });
      }
      res.status(400).json({ message: err.message });
    }
  });
  
  /* DELETE PRODUCT */
  router.delete('/:id', async (req, res) => {
    try {
      const product = await Products.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      await product.deleteOne();
      res.json({ message: 'Product deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  

  //getProd
  async function getProduct(req, res, next) {
    let product;
    try {
      product = await Products.findById(req.params.id);
      if (product == null) {
        return res.status(404).json({ message: 'Cannot find Produc' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.product = product;
    next();
  }
  module.exports = router;
