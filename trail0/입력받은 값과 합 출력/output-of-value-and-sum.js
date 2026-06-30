const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');

let num0 = Number(input[0]);
let num1 = Number(input[1]);

console.log(num0 + " " + num1 + " " + (num0 + num1));

