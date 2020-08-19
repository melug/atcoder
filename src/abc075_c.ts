import * as fs from "fs";

let [line1, ...lines] = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

let [N, M] = line1.split(" ").map(Number);
let Graph: number[][] = new Array(N);

for(let i=0; i<N; i++) {
    Graph[i] = [];
}

for(let i=0; i<M; i++) {
    let [a, b] = lines[i].split(" ").map(Number);
    Graph[a-1].push(b-1);
    Graph[b-1].push(a-1);
}

let visited: boolean[] = new Array(N).fill(false);
let tin: number[] = new Array(N).fill(-1);
let tlow: number[] = new Array(N).fill(-1);
let timer: number = 0;
let bridges: number = 0;

function dfs(node:number, node_parent?: number): void {
    visited[node] = true;
    tin[node] = tlow[node] = timer++;
    for(let child of Graph[node]) {
        if (child == node_parent)
            continue
        if (visited[child]) {
            tlow[node] = Math.min(tlow[node], tlow[child]);
        } else {
            dfs(child, node);
            tlow[node] = Math.min(tlow[node], tlow[child]);
            if (tin[node] < tlow[child]) {
                bridges += 1;
            }
        }
    }
}

for(let i=0; i<N; i++) {
    if (!visited[i]) {
        dfs(i);
    }
}

console.log(bridges)
