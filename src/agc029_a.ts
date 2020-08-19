import * as fs from "fs";

let S = fs.readFileSync("/dev/stdin", "utf8").trim();

// BWBWBW = 6
let position = S.length-1;
let answer = 0;
for(let i=S.length-1; i>=0; i--) {
    if (S[i] == 'B') {
        answer += position-i;
        position -= 1;
    }
}
console.log(answer);
