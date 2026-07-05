const fs = require("fs");
let num = Number(fs.readFileSync(0).toString().trim().split());

result = ""

for (let i = 1; i < 6; i++) {
    result += num * i + " ";
}

console.log(result)

 