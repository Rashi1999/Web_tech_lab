var http = require('http');
var express = require('express');
var bodyParser=require('body-parser');
var cors=require('cors');
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;
var app=express();
var appRoutes = require('./routes/appRoutes');


mongoose.connect('mongodb://localhost/meanDb');

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/',appRoutes);

http.createServer(app).listen(port);

console.log("Backend running on : ",port);