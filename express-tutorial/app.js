// Setting up express API

const express = require("express");
const app = express();
const logger = require("./logger.js");

// app.use applies the middleware to all the routes
// if we specify a path here, it becomes the root of the path that invokes the middleware function
// and the middleware function only be executed if the base of requested path matches the path
app.use("/api", logger);

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
