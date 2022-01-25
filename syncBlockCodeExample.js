// Example of a sync code that will block the event loop

// Setting up the server

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  } else if (req.url === "/about") {
    // BLOCKING CODE!!! => such as nested for loop
    for(let i = 0; i < 900; i++) {
      for (let j = 500; j > 0; j--) {
        console.log(`${i}  ${j}`);
      }
    }

    res.end("About page");
  } else {
    res.end("Error page");
  }
});

server.listen("3000", () => {
  console.log("The server is up and running...");
});
