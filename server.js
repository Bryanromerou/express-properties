//Constant Variables
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

