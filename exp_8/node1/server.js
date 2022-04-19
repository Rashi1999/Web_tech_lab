//Require module
var bodyParser = require('body-parser');
var express = require('express');
bodyParser=require('body-parser');

// Express Initialize
var app = express();
var service=require('./service.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('../public'));
service.attachService(app);
app.listen(3333, ()=>console.log('Listening on port : 3333'));