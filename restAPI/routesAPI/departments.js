const express = require('express');
const router = express.Router();
const Department = require('../models/Departments');

// Get all departments
router.get('/', async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single department by ID
router.get('/:id', getDepartment, (req, res) => {
  res.json(res.department);
});

// Create a new department
router.post('/', async (req, res) => {
  const department = new Department({
    name: req.body.name,
    description: req.body.description,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    socialMedias: req.body.socialMedias,
  });

  try {
    const newDepartment = await department.save();
    res.status(201).json(newDepartment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a department by ID
router.patch('/:id', getDepartment, async (req, res) => {
  if (req.body.name != null) {
    res.department.name = req.body.name;
  }

  if (req.body.description != null) {
    res.department.description = req.body.description;
  }

  if (req.body.address != null) {
    res.department.address = req.body.address;
  }

  if (req.body.phone != null) {
    res.department.phoneNumber = req.body.phoneNumber;
  }

  if (req.body.email != null) {
    res.department.email = req.body.email;
  }

  if (req.body.socialMedias != null) {
    res.department.socialMedias = req.body.socialMedias;
  }

  try {
    const updatedDepartment = await res.department.save();
    res.json(updatedDepartment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a department by ID
router.delete('/:id', getDepartment, async (req, res) => {
  try {
    await res.department.deletOne();
    res.json({ message: 'Department deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a single department by ID
async function getDepartment(req, res, next) {
  let department;

  try {
    department = await Department.findById(req.params.id);

    if (department == null) {
      return res.status(404).json({ message: 'Department not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.department = department;
  next();
}

module.exports = router;
