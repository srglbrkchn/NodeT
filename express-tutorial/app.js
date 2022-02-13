// Setting up express API

const express = require("express");
const app = express();


// Set up the peopel router
const people = require("./routes/people");

// Set up auth router
const auth = require("./routes/auth");


// static assets
app.use(express.static("./methods-public"));

// parse form data; attatch it to req.body
app.use(express.urlencoded({extended:false}));

// parse json; attach data sent by js to req.body for use
// straight up http request, sent by js
app.use(express.json());

// for the path that starts with "/api/people", I wanna use people router, imported from ./routes folder, ppl file
app.use("/api/people", people);

// for the path starts with "/login" , use auth router
app.use("/login", auth);


app.listen(3000, () => {
  console.log("The server is up and running...");
});
