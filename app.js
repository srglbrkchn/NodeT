//  file system module
// 1. synchronous ones

const {readFileSync, writeFileSync} = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8")

// If the file is not in this address, node will create one
// If the file is in this address, node will overwrite its content
writeFileSync("./content/result-sync.txt", `Over writing it now...`);
