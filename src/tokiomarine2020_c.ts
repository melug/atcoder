import * as fs from "fs";

let [line1, line2] = fs.readFileSync("/dev/stdin", "utf8").trim().split('\n');

let [N, K] = line1.split(" ").map(Number);
let A = line2.split(" ").map(Number);

function makeOneStep(A: number[]): [boolean, number[]] {
    let B: number[] = new Array(N).fill(0);
    for(let i=0; i<N; i++) {
        let left = Math.max(0, i-A[i]), right = i+A[i];
        B[Math.max(0, left)] += 1;
        if (right+1 < N)
            B[right+1] -= 1;
    }
    let converged = true;
    for(let i=1; i<N; i++) {
        B[i] += B[i-1]
        converged = converged && B[i] == N;
    }
    return [converged, B];
}

let converged: boolean;

for(let i=0; i<K; i++) {
    [converged, A] = makeOneStep(A);
    if (converged)
        break;
}

console.log(A.map((a) => {return a.toString();}).join(" "));
