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
app.use([logger ,authorize]);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});


app.listen(3000, () => {
  console.log("The server is up and running...");
});
