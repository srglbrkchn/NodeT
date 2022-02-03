// Setting up the server
const express = require("express");
const app = express();
const path = require("path");

// Set up static and middleware using use verb
app.use(express.static("./public"));

app.get("/", (req, res)=> {
  // sending absolute path using resolve method in path module
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});


// In case of 404
app.all("*", (req, res)=> {
  res.status(404).send("Resource not found");
});


// Listening to the port
app.listen(3000, ()=> {
  console.log("The server is up and running...");
});
