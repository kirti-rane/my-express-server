const express = require("express");

const app = express();

app.get("/",function(request, response){

    response.send("<h1>HELLOWW WORLD!!!</h1>")
});

app.get("/contact", function(req, res){

    res.send("contact to Kirti Rane at: kirtirane1909@gmail.com");
});

app.get("/about", function(req, res){

    res.send("<ul><li>coding</li><li>dancing</li></ul>");
});
app.listen(3000, function(){

    console.log("local server created at 3000");
});
