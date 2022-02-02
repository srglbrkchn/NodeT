// Setting up the server using Express
const express = require("express");

// app an instanse of express
const app = express();

// or
// const app = require("express")();

app.get("/",(req, res)=> {
  console.log("User is asking for the resource...");
  res.status(200).send("Home page :) ");
});

app.get("/about", (req, res)=> {
  res.status(200).send("About page");
});

// handles all http verbs/cases
app.all("*", (req, res)=> {
  res.status(404).send("<h1> Resource Not Found! </h1>");
});


app.listen(3000, ()=> {
  console.log("The server is up and running...");
});

// app's methods
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
