import { messages } from "./moreTests/messages.js";
import all from "./names.cjs";
/* 
the commonJs import which would ordinarily work no longer does as all files are now
treated as es6 modules - see "type": "module" specified in package.json
*/
// const names = require("./names.js");

const { names } = all;
console.log(messages);

console.log("msg = ", messages);
console.log(names);
