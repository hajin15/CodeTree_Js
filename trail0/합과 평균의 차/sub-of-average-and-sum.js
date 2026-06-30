const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let num0 = Number(input[0]);
let num1 = Number(input[1]);
let num2 = Number(input[2]);

let sum = Number(num0 + num1 + num2);

console.log(sum);
console.log(sum / 3);
console.log(sum - (sum / 3));
