const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let sex = Number(input[0]);
let age = Number(input[1]);

if (sex == 0 && age >= 19) {
    console.log("MAN");
} else if (sex == 0 && age < 19) {
    console.log("BOY");
} else if (sex == 1 && age >= 19) {
    console.log("WOMAN");
} else {
    console.log("GIRL");
}