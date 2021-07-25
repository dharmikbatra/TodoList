var http = require('http');
var express = require('express');
var port = process.env.PORT || 8000;
var app = express();
var appRoute = require("./routes/appRoutes");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
mongoose.connect('mongodb+srv://dharmik:dharmik@cluster0.riqfe.mongodb.net/CRUD?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true },(err)=>{
    if(!err){
        console.log("connected database ...");
    }else{
        console.log("error "+ JSON.stringify(err));
    }}
)
const path = require('path');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'./meanClient')));

app.use('/',appRoute);

http.createServer(app).listen(port);

console.log("connected"+port);

