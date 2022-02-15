// Streams practical examples
// Sending enormous files in chuncks through the web

const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  // const text = fs.readFileSync("./content/big.txt", "utf8");
  // res.end(text);

  // Here we read data in chuncks using fileStream
  // fileStream is our readStream here
  const fileStream = fs.createReadStream("./content/big.txt", "utf8");
  fileStream.on("open", ()=> {

    // Here we use pipe method of fileStream to write data in chuncks
    // Pipe method pushes from the readStream to the writeStream in chuncks (We pipe the date into a writeable stream)
    // res object of http can be set up as writeable stream, as shown below.
    fileStream.pipe(res);
  });

  // Sending the error to the page if an error event appeared on the stream
  fileStream.on("error", (err)=> {
    res.end(err);
  });

}).listen(3000, (err) => {
  if(err) {
    console.log(err);
  }
  console.log("The server is up and running...");
})
