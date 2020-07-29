// framework
var express = require('express');
// get response in req.body
var bodyParser = require('body-parser');
// used for creating schemas with mongo
var mongoose = require('mongoose');
const cors = require('cors');
var app = express();
app.use(cors());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(bodyParser.json());

/// cross origin hndling 
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

/// routes files 
const user = require('./router/user');
app.use('/user', user);

// mongo db connnection made 
mongoose.connect('mongodb+srv://Manish:u5NldlSW5vLy3qjy@letstalk-nviuu.mongodb.net/Apusers?ssl=true&authSource=admin&retryWrites=true&w=majority',
 {useNewUrlParser: true})
app.listen(process.env.PORT || 9000)
module.exports = app;