// Setting up the server
const express = require("express");
const app = express();


app.get("/", (req, res)=> {

});


// In case of 404
app.all("*", (req, res)=> {
  res.status(404).send("Resource not found");
});


// Listening to the port
app.listen(3000, ()=> {
  console.log("The server is up and running...");
});
