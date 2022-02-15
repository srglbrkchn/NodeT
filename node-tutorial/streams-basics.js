// Strems...

const {createReadStream} = require("fs");

// highWaterMark : control the size of the buffer/received chuncks of the stream
const stream = createReadStream("./content/big.txt", {highWaterMark: 90000 //, encoding: "utf8"
});

// Checking for th received data, using data event
stream.on("data", (result)=> {
  console.log(result);
});

// Use error event to check for errors on the stream
stream.on("error", (err)=> {
  console.log(err);
});
