import * as fs from "fs";

let [N_str, A_str] = fs.readFileSync("/dev/stdin", "utf8").trim().split('\n');

let N: number = Number(N_str);
let A: number[] = A_str.split(' ').map((value, index) => {return Number(value)-(index+1);});
A.sort((a, b) => {return a-b;});

function f(b: number): number {
    return A.reduce((prev, current) => {return prev+Math.abs(current-b)}, 0);
}

console.log(f(A[Math.floor(N/2)]));
