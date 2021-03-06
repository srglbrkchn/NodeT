// Studying server-side event driven programming

// Assign events module to a variable which is a class
const EventEmitter = require("events");

// Emit an event and listen for it
// Create an object/instance of our EventEmitter class
const customEmitter = new EventEmitter();

// Use on method to listen/subscribe for an specific event
customEmitter.on("response", (name, id)=>{
  console.log(`Event triggered! calling ${name} ${id}`);
});

// We can have as many methods we would want on a same event:
customEmitter.on("response", ()=>{
  console.log(`Second Event triggered!`);
});

// Emit the specific event called response
customEmitter.emit("response", "Dodo", "007");
