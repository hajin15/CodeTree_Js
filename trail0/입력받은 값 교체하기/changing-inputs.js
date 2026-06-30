const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let num0 = input[0];
let num1 = input[1];

console.log(num1 + " " + num0);