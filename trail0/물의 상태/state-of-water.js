const fs = require("fs");
let temp = fs.readFileSync(0).toString().trim().split(" ");



if (temp < 0) {
    console.log("ice");
} else if (temp >= 100) {
    console.log("vapor");
} else {
    console.log("water");
}