// Asynchronous file
const {
  readFile,
  writeFile
} = require("fs");

console.log("Start async");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    return;
    console.log(err);
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      return;
      console.log(err);
    }
    const second = result;

    writeFile("./content/result-async.txt",
      `Hi, here is combination of two files: ${first} ${second}`,
      (err, result) => {
        if (err) {
          return;
          console.log(err);
        }
        console.log("Done with this task");
      });
  });
});

console.log("Starting a new task.");
