// Setting up express API

const express = require("express");
const app = express();

let {people} = require("./data");

// static assets
app.use(express.static("./methods-public"));

// parse form data
app.use(express.urlencoded({extended:false}));

app.get("/api/people", (req, res) => {
  res.status(200).json({success:true, data:people});
});

app.post("/api/people", (req, res) => {
   
});


app.post("/login", (req, res) => {
  const {name} = req.body;
  if(name) {
    res.status(200).send(`Welcome ${name}.`);
  }else{
    res.status(401).send("Please provide credentials.");
  }

});


app.listen(3000, () => {
  console.log("The server is up and running...");
});
