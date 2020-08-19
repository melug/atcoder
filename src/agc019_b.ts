import * as fs from "fs";

let S = fs.readFileSync("/dev/stdin", "utf8").trim().split('');

let counter: Map<string, number> = new Map('abcdefghijklmnopqrstuvwxyz'.split('').map((c, i) => {return [c, 0]}));
let total: number = 0;
let answer: number = 1;


for(let c of S) {
    answer += (total-counter.get(c));
    counter.set(c, counter.get(c)+1);
    total += 1;
}

console.log(answer);
