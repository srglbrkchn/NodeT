// Setting up the server
const http = require("http");

const server = http.createServer((req, res) => {
 // Use .writeHead method to provide hedear/Meta data about our response
 res.writeHead(200, {"content-type":"text/html"});
 res.write("<h1> Home page </h1>");
 res.end();
});

server.listen(3000, () => {
  console.log("Server is up and running...");
});
