const fs = require("fs");
let num = fs.readFileSync(0).toString().trim().split(" ");

Number(num);

if (num >= 80) {
    console.log("pass");
} else {
    console.log(`${80 - num} more score`);
}