const fs = require("fs");
let score = fs.readFileSync(0).toString().trim().split(/\s+/);

if (Number(score[0]) > Number(score[2]) && Number(score[1]) > Number(score[3])) {
    console.log("1");
} else {
    console.log("0");
}

