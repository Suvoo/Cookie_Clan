const express = require('express')
const app = express()
const fs = require('fs')
const filename = './db.json'
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


// app.post('/contact',(req,res)=>{
//   // res.send('This is POST request')
//   let user = req.body
//   let data = fs.readFileSync(filename)
//   // data = data.trim(); 
//   let db = JSON.parse(data)
//   let email = req.body.email
//   let name = req.body.name
//   let message = req.body.message;
//   db.contact.push(user)

//   fs.writeFile(filename,JSON.stringify(db,null,'\t'),(err)=>{
//     if(err)
//         console.log(err)
//     else
//         res.send("<h3 class='text-primary'>Thanks "+db.contact[0].name+ " for contacting us. We'll get back to you soon!</h3>")
// })
// })

let port = process.env.PORT;
if (port == null || port == "") { port = 5000; }

app.listen(port, function() {
  console.log("Server has started successfully at localhost:5000");
});
