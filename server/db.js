
var mongoose = require('mongoose');

// var mongodbUrl = 'mongodb://localhost:27017/todo-mean';
var mongodbUrl = 'mongodb://test:test@ds139067.mlab.com:39067/todo-mean-db';


mongoose.connect(mongodbUrl,{
    useMongoClient: true
}, function(err){
    if(err){
        console.log("Error: Could not connect to mongodb");
        console.log(err);
    }
    else{
        console.log("Success: Connected to mongodb");
    }
});