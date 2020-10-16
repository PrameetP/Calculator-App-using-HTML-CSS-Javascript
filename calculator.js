
const express = require ('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use('/js', express.static(__dirname + '/js'));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});


  

app.listen(8080,function(){
    console.log("The server is running at 8080");
});