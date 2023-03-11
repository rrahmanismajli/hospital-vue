const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  backgroundImage:String
});

module.exports = mongoose.model('services', servicesSchema);