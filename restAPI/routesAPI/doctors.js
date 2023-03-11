var Doctors = require('../models/Doctor');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');




router.get('/', async (req, res) => {
  try {
    const doctors = await Doctors.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/:id', getDoctor, (req, res) => {
  res.json(res.doctor);
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../public/doctorimages');
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

router.post('/', upload.single('photo'), async (req, res) => {
  const doctor = new Doctors({
    name: req.body.name,
    specialization: req.body.specialization,
    experience: req.body.experience,
    photo: req.file ? req.file.filename : null,
     socialMedias: req.body.socialMedias,
  });

  try {
    const newDoctor = await doctor.save();
    res.status(201).json(newDoctor);
  } catch (err) {
    if (req.file) {
      fs.unlink(`'../public/doctorimages/${req.file.filename}`, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', upload.single('photo'), getDoctor, async (req, res) => {
  if (req.body.name != null) {
    res.doctor.name = req.body.name;
  }

  if (req.body.specialization != null) {
    res.doctor.specialization = req.body.specialization;
  }

  if (req.body.experience != null) {
    res.doctor.experience = req.body.experience;
  }

  if (req.file) {
   
    if (res.doctor.photo) {
      const filePath = `C:/Users/rrahm/OneDrive/Desktop/Betimi/hospital-vue/public/doctorimages/${res.doctor.photo}`;
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }


    res.doctor.photo = req.file.filename;
  }

  try {
    const updatedDoctor = await res.doctor.save();
    res.json(updatedDoctor);
  } catch (err) {
    if (req.file) {
      fs.unlink(`/images/${req.file.filename}`, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }
    res.status(400).json({ message: err.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const doctor = await Doctors.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    await doctor.deleteOne();
    res.json({ message: 'Doctor deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});


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