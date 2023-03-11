var Services = require('../models/Services');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../public/static/servicesBackgroundImg');
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
// GET all services
router.get('/', async (req, res) => {
  try {
    const services = await Services.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single services
router.get('/:id', getServices, (req, res) => {
  res.json(res.services);
});

// CREATE a  services
router.post('/',upload.single('backgroundImage'), async (req, res) => {
  const  services= new Services({
    name: req.body.name,
    description: req.body.description,
    backgroundImage:req.file ? req.file.filename :null,
  });

  try {
    const newServices = await services.save();
    res.status(201).json(newServices);
  }catch (err) {
    if (req.file) {
      fs.unlink(`'../public/static/servicesBackgroundImg/${req.file.filename}`, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }
    res.status(400).json({ message: err.message });
  }
});

// UPDATE a services
router.put('/:id', getServices, async (req, res) => {
  if (req.body.name != null) {
    res.services.name = req.body.name;
  }

  if (req.body.description != null) {
    res.services.description = req.body.description;
  }  if (req.file) {
   
    if (res.services.backgroundImage) {
      const filePath = `C:/Users/rrahm/OneDrive/Desktop/Betimi/hospital-vue/public/static/servicesBackgroundImg/${res.doctor.photo}`;
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }


    res.services.backgroundImage = req.file.filename;
  }
  try {
    const updatedService = await res.services.save();
    res.json(updatedService );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a services

router.delete('/:id', async (req, res) => {
  try {
    const service = await Services.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    await service.deleteOne();
    res.json({ message: 'Separtment deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});


// Middleware function to get a service by ID
async function getServices(req, res, next) {
  let services;
  try {
    services = await Services.findById(req.params.id);
    if (services == null) {
      return res.status(404).json({ message: 'Cannot find service' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.services = services;
  next();
}

module.exports = router;