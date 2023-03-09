var Services = require('../models/Services');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();



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
router.get('/:id', getService, (req, res) => {
  res.json(res.services);
});

// CREATE a  services
router.post('/', async (req, res) => {
  const  services= new Services({
    name: req.body.name,
    description: req.body.description,
  });

  try {
    const newServices = await services.save();
    res.status(201).json(newServices);
  } catch (err) {
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
  }
  try {
    const updatedService = await res.services.save();
    res.json(updatedService );
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a services
router.delete('/:id', getService, async (req, res) => {
  try {
    await res.services.remove();
    res.json({ message: 'Service deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
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