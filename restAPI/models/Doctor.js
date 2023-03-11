const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },photo:String,
  author:String,
  socialMedias:{
    type:Array,
    required:false
  },
});

module.exports = mongoose.model('doctors', doctorSchema);
