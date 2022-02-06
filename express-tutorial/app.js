// Setting up express API

const express = require("express");
const app = express();

// Middleware
// req => middleware => res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log("Method: " + method + ", Address: " + url + ", Year: " + time);

  // Sendint response in middleware and terminating the cycle
  // res.send("Hi from middleware");

  // Unless we send a response in middleware and close the cycle in here,
  // we have to pass it on to the next middleware;
  // using next(); to pass the middleware to the next function
  next();
}


app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("About");
});


app.listen(3000, () => {
  console.log("The server is up and running...");
});
