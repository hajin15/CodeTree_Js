const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);

let arr = input[1].split(" ").map(Number);

let newArr = [];

for (let i = 0; i < n; i++) {
    newArr[i] = arr[i] * arr[i];
}

let num = "";
for (let i = 0; i < n; i++) {
    num += newArr[i] + " ";
}

console.log(num);