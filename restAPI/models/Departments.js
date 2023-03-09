// department.js
const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  
  description: {
    type: String,
    required: false,
  },
  adress: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  socialMedias:{
    type:Array,
    required:false
  },
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
