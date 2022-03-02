const express = require("express");
const app = express();
const port = 3000;
const tasks = require("../routes/tasks.js");
const connectDB = require("./db/connect.js");
require("dotenv").config();

// middleware
app.use(express.static("./public"));
app.use(express.json());


// Routes 

//  /api/v1/tasks => root route for the tasks router
app.use("/api/v1/tasks", tasks);

const start = async ()=> {
  try {
    // we await the promiss. if connection is successful we spin up the server
    await connectDB(process.env.MONGO_URI);
    app.listen(port, ()=>{
      console.log(`The server is up and running on port ${port}...`);
    });
  } catch (e) {
    console.log(e);
  }
}

// envoke the start function
start();
