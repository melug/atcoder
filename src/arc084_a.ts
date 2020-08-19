import * as fs from "fs";

let [N_str, A_str, B_str, C_str] = fs.readFileSync("/dev/stdin", "utf8").trim().split('\n');
let N = Number(N_str);
let A = A_str.split(' ').map(Number).sort((a, b) => {return a-b;});
let B = B_str.split(' ').map(Number).sort((a, b) => {return a-b;});
let C = C_str.split(' ').map(Number).sort((a, b) => {return a-b;});


let B_lower = new Array(N).fill(0);
let B_higher = new Array(N).fill(0);

let lowerCount = 0, higherCount = 0;
for(let i=0; i<N; i++) {
    while (lowerCount < N && A[lowerCount] < B[i]) {
        lowerCount += 1;
    }
    while (higherCount < N && C[N-(higherCount+1)] > B[N-i-1]) {
        higherCount += 1;
    }
    B_lower[i] = lowerCount;
    B_higher[N-i-1] = higherCount;
}

let answer = 0;
for(let i=0; i<N; i++) {
    answer += B_lower[i]*B_higher[i];
}

console.log(answer);
