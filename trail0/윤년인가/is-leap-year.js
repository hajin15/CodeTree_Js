const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split();

let Y = Number(input[0]);

if (Y % 400 == 0) {
    console.log("true");
} else if (Y % 100 == 0) {
    console.log("false");
} else if (Y % 4 == 0) {
    console.log("true");
} else {
    console.log("false");
}