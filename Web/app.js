const express = require('express');
const app = express();
const fs = require('fs');
app.set("view engine", "ejs");


// app.use(express.static(__dirname+ "/views"));
app.use(express.static(__dirname+ "/public"));
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/',(req,res) => {
    res.render("index", {page: "index"})
})
app.get("/assignments", (req,res) => {
  res.render("assignments", {page: "assignments"});
});
app.get("/events", (req,res) => {
  res.render("events", {page: "events"});
});


let port = process.env.PORT;
if (port == null || port == "") { port = 5000; }

app.listen(port, function() {
  console.log("Server has started successfully at localhost:5000");
});
