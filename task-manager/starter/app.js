const express = require("express");
const app = express();

const port = 3000;

const tasks = require("../routes/tasks.js");

// middleware
app.use(express.json());


// Routes
app.get("/hello", (req, res)=> {
  res.send("Hello World!!");
});

//  /api/v1/tasks => root route for the tasks router
app.use("/api/v1/tasks", tasks);

app.listen(port, ()=>{
  console.log(`The server is up and running on port ${port}...`);
});
