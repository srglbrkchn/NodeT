// Setting up the server
const http = require("http");
const {
  readFileSync
} = require("fs");

// Get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");


// set up the server
const server = http.createServer((req, res) => {
  // Use .writeHead method to provide hedear/Meta data about our response
  // Using mime/media type

  const url = req.url;
  console.log(url);

  // Home page
  if (url === "/") {
    res.writeHead(200, {
      "content-type": "text/html"
    });
    res.write(homePage);
    res.end();
  }
  // About page
  else if (url === "/about") {
    res.writeHead(200, {
      "content-type": "text/html"
    });
    res.write("<h1> About page </h1>");
    res.end();
  }

  // Styles
  else if (url === "/styles.css") {
    res.writeHead(200, {
      "content-type": "text/css"
    });
    res.write(homeStyles);
    res.end();
  }

  // Image - logo
  else if (url === "/logo.svg") {
    res.writeHead(200, {
      "content-type": "image/svg+xml"
    });
    res.write(homeImage);
    res.end();
  }

  // Logic
  else if (url === "/browser-app.js") {
    res.writeHead(200, {
      "content-type": "text/javascript"
    });
    res.write(homeLogic);
    res.end();
  }

  // 404
  else {
    res.writeHead(404, {
      "content-type": "text/html"
    });
    res.write("<h1> Page not found!!</h1>");
    res.end();
  }

});

server.listen(3000, () => {
  console.log("Server is up and running...");
});
