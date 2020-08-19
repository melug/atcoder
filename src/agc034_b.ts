import * as fs from "fs";

let s = fs.readFileSync("/dev/stdin", "utf8").trim();

let aCount = 0;
let answer = 0;
let i = 0;

while (i < s.length) {
    if (s.substr(i, 1) == 'A') {
        aCount += 1;
        i += 1;
    } else if (s.substr(i, 2) == 'BC') {
        answer += aCount;
        i += 2;
    } else {
        aCount = 0;
        i += 1;
    }
}

console.log(answer);
// ABCABC
