//Constant Variables
const express = require("express");
const app = express();
const methodOverride = require('method-override')
const bodyParser = require('body-parser');
const PORT = 4000;


//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(methodOverride('_method'));

//Property Controller
const propertyCtrl = require("./controllers/propertyController");
app.use("/properties",propertyCtrl);

//Home
app.get("/",(req,res)=>{
    res.render("index");
})

app.listen(PORT, ()=>{
    console.log("Now listening to port 4000");
});