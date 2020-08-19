import * as fs from "fs";

let X = fs.readFileSync("/dev/stdin", "utf8").trim();

let answer: string[] = [];
let j = 0;

for(let i=0; i<X.length; i++) {
    if (X[i] == 'T') {
        let j = answer.length-1;
        if (j >= 0 && answer[j] == 'S') {
            answer.pop()
        } else {
            answer.push(X[i]);
        }
    } else {
        answer.push(X[i]);
    }
}

console.log(answer.length);
