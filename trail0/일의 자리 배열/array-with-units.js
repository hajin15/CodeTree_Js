const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

let result = [A, B];

for (let i = 0; i < 8; i++) {
    let next = (A + B) % 10;
    result.push(next);

    A = B;
    B = next;
}

console.log(result.join(" "));