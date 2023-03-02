const mongoose = require('mongoose');

const HomeSchema = mongoose.Schema({
    product: String,
    name: String,
    tel: String,
    updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Reservation', HomeSchema);