const express = require('express');
//const  path = require('path');
const  bodyParser = require('body-parser');
const  cors = require('cors');
const  mongoose = require('mongoose');
//const  config = require('./DB');
const  doctors = require ('./routesAPI/doctors');

const  departments = require ('./routesAPI/departments');
      
const app = express();
var port = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: "*",
}));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/Projektidb',{
  useNewUrlParser: true,

  useUnifiedTopology: true,

});
console.log("connected to Mongo");


app.use('/doctors', doctors);
app.use('/departments', departments);



app.listen(port, function(){
  console.log('NodeJS Server Port: ', port);
});