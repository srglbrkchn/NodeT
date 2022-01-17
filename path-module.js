// Path module. Allows us to interact with a file system

const path = require("path");

// Separator proparty, returns the platform specific Separator
console.log(path.sep);


// path.join method. joins sequence of path segments, using platform specific seperator as limitor & returns normalized resulting path.
const filePath = path.join("/content/", "subfolder","test.txt");
console.log(filePath);

// return the base, last portion, of the path
const base = path.basename(filePath);
console.log(base);

// path.resolve, which returns an absolute path
// accepts a sequence of path, or path segments and resolves into an absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
