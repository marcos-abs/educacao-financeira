//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("home", {});
});

app.get("/professor", function(req, res) {
    res.render("professor", {});
});

app.get("/videomaterial", function(req, res) {
    res.render("videomaterial", {});
});

app.get("/informacoes", function(req, res) {
    res.render("informacoes", {});
});

app.get("/contato", function(req, res) {
    res.render("faleconosco", {});
});

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});