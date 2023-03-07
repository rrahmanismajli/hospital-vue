var Doctors = require('../models/Doctor');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();



// GET all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await Doctors.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single doctor
router.get('/:id', getDoctor, (req, res) => {
  res.json(res.doctor);
});

// CREATE a doctor
router.post('/', async (req, res) => {
  const doctor = new Doctors({
    name: req.body.name,
    specialization: req.body.specialization,
    experience: req.body.experience
  });

  try {
    const newDoctor = await doctor.save();
    res.status(201).json(newDoctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE a doctor
router.put('/:id', getDoctor, async (req, res) => {
  if (req.body.name != null) {
    res.doctor.name = req.body.name;
  }

  if (req.body.specialization != null) {
    res.doctor.specialization = req.body.specialization;
  }

  if (req.body.experience != null) {
    res.doctor.experience = req.body.experience;
  }

  try {
    const updatedDoctor = await res.doctor.save();
    res.json(updatedDoctor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a doctor
router.delete('/:id', getDoctor, async (req, res) => {
  try {
    await res.doctor.remove();
    res.json({ message: 'Doctor deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a doctor by ID
async function getDoctor(req, res, next) {
  let doctor;
  try {
    doctor = await Doctors.findById(req.params.id);
    if (doctor == null) {
      return res.status(404).json({ message: 'Cannot find doctor' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.doctor = doctor;
  next();
}

module.exports = router;