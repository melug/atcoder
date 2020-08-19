import * as fs from "fs";


let lines = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");
let N = Number(lines[0]);
let Graph: number[][] = new Array(N).fill(0).map(() => new Array());
let incomingDegrees: number[] = new Array(N).fill(0);

for(let i=0; i<N-1; i++) {
    let [a, b] = lines[i+1].split(" ").map(Number);
    a -= 1;
    b -= 1;
    Graph[a].push(b);
    Graph[b].push(a);
    incomingDegrees[a] += 1;
    incomingDegrees[b] += 1;
}

let C: number[] = lines[N].split(" ").map(Number).sort((a, b) => b-a);

let oneDegreeNodes: number[] = [];

for(let i=0; i<N; i++) {
    if (incomingDegrees[i] == 1)
        oneDegreeNodes.push(i);
}

let assignment: number[] = new Array(N).fill(C[0]);
let answer: number = 0;

while(oneDegreeNodes.length != 1) {
    let node = oneDegreeNodes.pop();
    assignment[node] = C.pop();
    answer += assignment[node];
    for(let neighbour of Graph[node]) {
        incomingDegrees[neighbour] -= 1;
        if (incomingDegrees[neighbour] == 1)
            oneDegreeNodes.push(neighbour);
    }
}

console.log(answer);
console.log(...assignment);
