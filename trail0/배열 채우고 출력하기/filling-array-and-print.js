const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

const A = input.reverse();

const B = A.join('');

console.log(B);