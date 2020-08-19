import * as fs from "fs";

let [line1, ...lines] = fs.readFileSync("/dev/stdin", "utf8").trim().split('\n');

let [R, C, K] = line1.split(' ').map(Number);
let table: number[][] = new Array(R).fill([]).map(() => new Array(C).fill(0));

for(let i=0; i<K; i++) {
    let [r, c, v] = lines[i].split(" ").map(Number);
    table[r-1][c-1] = v;
}

let dp1 = new Array(C).fill(Number.NEGATIVE_INFINITY);
let dp2 = new Array(C).fill(Number.NEGATIVE_INFINITY);
let dp3 = new Array(C).fill(Number.NEGATIVE_INFINITY);
let old_row = new Array(C).fill(Number.NEGATIVE_INFINITY);

for(let i=0; i<R; i++) {
    dp1[0] = table[i][0];
    dp2[0] = Number.NEGATIVE_INFINITY;
    dp3[0] = Number.NEGATIVE_INFINITY;
    for(let j=0; j<C; j++) {
        if (j>0) {
            dp3[j] = Math.max(dp3[j-1], dp2[j-1]+table[i][j]);
            dp2[j] = Math.max(dp2[j-1], dp1[j-1]+table[i][j]);
            dp1[j] = dp1[j-1];
        }
        dp1[j] = Math.max(dp1[j], table[i][j], old_row[j]+table[i][j]);
        old_row[j] = Math.max(dp1[j], dp2[j], dp3[j]);
    }
}

console.log(old_row[C-1]);
