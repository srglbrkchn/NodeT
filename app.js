const _ = require("lodash");

const items = [1, [2, [3, 4, [5, 6]]]];

// Use lodash flattenDeep method to turn items array into a flat array
const newItems = _.flattenDeep(items);

console.log(newItems);
console.log("Testing, messing...");
