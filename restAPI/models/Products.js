const mongoose = require('mongoose');

const HomeSchema = mongoose.Schema({
    name: String,
    //title:String,
    price:{
        type:Number,
        min:2,
        
    },
    image:String,
    description:String,
    stock:{
        type:Number
    },
    added_date: { type: Date, default: Date.now },
    author:String,
});
module.exports = mongoose.model('Products', HomeSchema);