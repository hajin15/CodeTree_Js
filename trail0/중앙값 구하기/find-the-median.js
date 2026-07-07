const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);

if ((A > B && A < C) || (A > C && A < B)) {
    console.log(A);
} else if ((B > A && B < C) || (B > C && B < A)) {
    console.log(B);
} else {
    console.log(C);
}