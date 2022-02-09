// Setting up express API

const express = require("express");
const app = express();

let {people} = require("./data");

// static assets
app.use(express.static("./methods-public"));

// parse form data; attatch it to req.body
app.use(express.urlencoded({extended:false}));

// parse json; attach data sent by js to req.body for use
// straight up http request, sent by js
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({success:true, data:people});
});

app.post("/api/people", (req, res) => {
  const {name} = req.body;

  if(!name) {
    return(res.status(400).json({success:false, msg: "Please provide name value."}));
  }else {
    return(res.status(201).json({success:true, person:name}));
  }
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
