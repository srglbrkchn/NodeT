// The last intial built in module => http module
const http = require("http");

// Creating the server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcom Boobile...");
  }
  if (req.url === "/about") {
    res.end("Alittle bit about us...");
  }

  // If the page does not exist
  res.end(`<h1>Oops!</h1>
    <p> The page you are looking for does not exist here! </p>
    <a href="/"> Back Home </a>`);
});


// Make server listen to a port
server.listen(3000, () => {
  console.log("The server is up and running...");
});
