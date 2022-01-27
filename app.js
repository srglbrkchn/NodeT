// Cleaner async code
// Using promise instead on nested callback

const {
  readFile, writeFile
} = require("fs").promises;

// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile("./content/result-promisify.txt", `This is easy... hahaha ${first} ${second}`, {flag:"a"});
    console.log(first, second);
  } catch (e) {
    console.log(e);
  }
}

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }


// getText("../content/first.txt").
// then((data)=> {console.log(data);}).
// catch((err)=> {console.log(err);});
