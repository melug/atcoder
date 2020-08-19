import * as fs from "fs";


class DisjointSet {
    parents: number[];

    constructor(readonly size: number) {
        this.parents = new Array(size);
        for(let i=0; i<size; i++)
            this.parents[i] = i;
    }

    find(node: number): number {
        if (this.parents[node] != node)
            this.parents[node] = this.find(this.parents[node]);
        return this.parents[node];
    }

    union(node1: number, node2: number): void {
        let parent1 = this.find(node1),
            parent2 = this.find(node2);
        if (parent1 != parent2)
            this.parents[parent2] = parent1;
    }
}

let [line1, line2, ...lines] = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

let [N, M] = line1.split(" ").map(Number);
let P = line2.split(" ").map((n) => {return Number(n)-1;});
let X:number[] = [],
    Y:number[] = [];

let disjointSet: DisjointSet = new DisjointSet(N);

for(let i=0; i<M; i++) {
    let [x, y] = lines[i].split(" ").map(Number);
    disjointSet.union(x-1, y-1);
}

let answer = 0;
for(let i=0; i<N; i++) {
    if (disjointSet.find(i) == disjointSet.find(P[i])) {
        answer += 1;
    }
}

console.log(answer);
