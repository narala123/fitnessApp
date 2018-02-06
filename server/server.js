var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({limit: '5mb',extended:true,parameterLimit:50000}));
app.use(bodyParser.json({limit: '5mb'}));

require('./config/routes')(app,express);


app.listen(3000,function(result){
 console.log('i am listening at 3000');
}); 

mongoose.connect('mongodb://localhost/fitnessapp',function(err,result){
   if(err){
       console.log(err);

   }else{
     console.log('db connected successfully');

   }


});