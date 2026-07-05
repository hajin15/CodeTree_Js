const fs  = require("fs");
let input = fs.readFileSync(0).toString().trim().split();

if (input >= 3000) {
    console.log("book");
} else if (1000 <= input && input <= 3000) {
    console.log("mask");
} else {
    console.log("no");
}

