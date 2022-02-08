// Setting up express API

const express = require("express");
const app = express();
const logger = require("./logger.js");
const authorize = require("./authorize.js");

// app.use applies the middleware to all the routes
// if we specify a path here, it becomes the root of the path that invokes the middleware function
// and the middleware function only be executed if the base of requested path matches the root here
// app.use("/api", logger);

// When path ommited, middleware function will be applied to all the requests

// use multiple middleware functions, order is important, executed based on order
app.use(logger);

app.get("/", (req, res) => {
  // const {name, id} = req.user;
  // console.log("Name: " + name + " ID: " + id);

  res.send("Home");
});

app.get("/about", (req, res) => {
  // Access user obj attached to req obj in authorize middleware
  // console.log(req.user);
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

// only authorize on the /api/items route
app.get("/api/items", authorize, (req, res) => {
  res.send("Items");
});


app.listen(3000, () => {
  console.log("The server is up and running...");
});
