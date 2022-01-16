
const {john, peter} = require("./names.js");
const {sayHi} = require("./utils.js");
const data = require("./alternative.js");

sayHi("Moolie");
sayHi(john);
sayHi(peter);

console.log(john + " " + peter);
console.log(data);
