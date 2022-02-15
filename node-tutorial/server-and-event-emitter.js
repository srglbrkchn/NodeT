// Using on method (event-emitter method) to set up a server

const http = require("http");

const server = http.createServer();

// Listen on "request" event, when emitted, respond
server.on("request", (req, res)=>{
  res.end("Hello, and welcome ...");
});


server.listen(3000, ()=>{
  console.log("The server is up and running...");
});
