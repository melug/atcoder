import * as fs from "fs";
/**
4 3
###
###
...
###
*/

let [line1, ...lines] = fs.readFileSync("/dev/stdin", "utf8").trim().split('\n');
let [H, W] = line1.split(' ').map(Number);

let table: string[][] = [];
let visited: boolean[][] = [];

for(let i=0; i<H; i++) {
    table.push(Array.from(lines[i]));
    visited.push(new Array(W).fill(false));
}

function dfs(i: number, j: number): number {
    let counter: Map<string, number> = new Map([['.', 0], ['#', 0]]);
    counter.set(table[i][j], 1);
    visited[i][j] = true;
    let stack = [[i, j]];
    while (stack.length != 0) {
        let [x, y] = stack.pop();
        for(let [x1, y1] of [[x-1, y], [x+1, y], [x, y-1], [x, y+1]]) {
            if (0 <= x1 && x1 < H && 0 <= y1 && y1 < W &&
                !visited[x1][y1] && table[x][y] != table[x1][y1]) {
                visited[x1][y1] = true;
                stack.push([x1, y1]);
                counter.set(table[x1][y1], counter.get(table[x1][y1])+1);
            }
        }
    }
    return counter.get('#')*counter.get('.');
}

let answer = 0;
for(let i=0; i<H; i++) {
    for(let j=0; j<W; j++) {
        if (!visited[i][j]) {
            answer += dfs(i, j);
        }
    }
}

console.log(answer);
