const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

let num0 = Number(input[0]);
let num1 = Number(input[1]);
let num2 = Number(input[2]);

console.log(num0.toFixed(3));
console.log(num1.toFixed(3));
console.log(num2.toFixed(3));
