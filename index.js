var express = require("express");
var bodyParser = require('body-parser');
express();
var app= express();
app.use("/",bodyParser.urlencoded({ extended: false }));
app.use("/assests", express.static(__dirname+"/assests"));
app.use("/", express.static(__dirname+"/assests"));

app.post("/submit", function (req,res) {
    var dob = new Date(req.body.dob);
    var curr_date = new Date();
    var t = parseInt ( (curr_date - dob)/ (24*3600*1000)  );
    res.send("Hey "+req.body.name+", you have lived on this planet for "+t+" days");
});



app.get("/home",function (req,res) {
    res.redirect("/index.html");
});
app.listen(3000);