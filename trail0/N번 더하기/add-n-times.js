const fs = require("fs");
let num = fs.readFileSync(0).toString().trim().split(" ");

let num0 = Number(num[0]);
let num1 = Number(num[1]);

for (let i = 0; i < num1; i++ ) {
    num0 += num1;
    console.log(num0);
}