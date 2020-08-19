import * as fs from "fs";

let S = fs.readFileSync("/dev/stdin", "utf8").trim();

let count: number[] = new Array(S.length).fill(0);

for(let i=1; i<S.length; i++) {
    if (S[i-1] == 'R' && S[i] == 'L') {
        let j = i-1;
        let c = 0;
        while (j >= 0 && S[j] == 'R') {
            if (c%2 == 0) {
                count[i-1] += 1;
            } else {
                count[i] += 1;
            }
            c += 1;
            j -= 1;
        }
        j = i;
        c = 0;
        while (j < S.length && S[j] == 'L') {
            if (c%2 == 0) {
                count[i] += 1;
            } else {
                count[i-1] += 1;
            }
            c += 1
            j += 1;
        }
    }
}

console.log(count.join(' '));
