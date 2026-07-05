const fs = require("fs");
let num = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(num[0]);
let B = Number(num[1]);

console.log(Number(A < B), Number(A == B));
