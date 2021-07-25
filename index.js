var http = require('http');
var express = require('express');
var port = process.env.PORT || 8000;
var app = express();
var appRoute = require("./routes/appRoutes");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
mongoose.connect('mongodb+srv://dharmik:dharmik@cluster0.riqfe.mongodb.net/test',{ useNewUrlParser: true,useUnifiedTopology: true })
const path = require('path');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'./meanClient')));

app.use('/',appRoute);

http.createServer(app).listen(port);

console.log("connected"+port);

