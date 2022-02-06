// Setting up express API

const express = require("express");
const app = express();
const logger = require("./logger.js");

// app.use applies the middleware to all the routes
app.use(logger);

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
