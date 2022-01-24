//  Event Loop Examples

// Example one
const {readFile} = require("fs");

console.log("Started a first task...");

readFile("./content/first.txt", "utf8", (err, result)=> {
  if(err){
    return;
    console.log(err);
  }
  console.log(result);
  console.log("Complete the first task.");
});

console.log("Starting another task.");


// Example two
// Start Operating System process
console.log("First");

setTimeout(()=> {
  console.log("Second");
} ,0);

console.log("Third");
// Completed and ended Operating process


// Example three
setInterval(()=> {
  console.log("Hallo!");
},2000);
console.log("I'll be executed first.");

// Every 2 seconds the event loop gonna envoke setInterval call back and the  process stays alive unless:
// kill it with ctrl + c
// unexpected error



// Example four
const http = require("http");
const server = http.createServer((req, res)=> {
  console.log("Request event");
  res.end("Hello Everybody!");
});

server.listen(3000, ()=>{
  console.log("Server is up and running...");
});
