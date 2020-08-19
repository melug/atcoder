import * as fs from "fs";

function readInts(line: string): number[] {
    return line.trim().split(' ').map(Number);
}

let [[N, K], A] = fs.readFileSync("/dev/stdin", "utf8").split('\n').slice(0, 2).map(readInts);

let modulo: number = Math.pow(10, 9)+7;

let answer: number = 0;

for(let i=0; i<A.length; i++) {
    let rightCount: number = 0;
    let totalCount: number = 0;
    for(let j=0; j<A.length; j++) {
        if (A[i] > A[j]) {
            totalCount += 1;
            if (i < j) {
                rightCount += 1;
            }
        }
    }
    answer = (answer+K*rightCount+Math.floor(K*(K-1)/2)*totalCount)%modulo;
}

console.log(answer);
