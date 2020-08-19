import * as fs from "fs";

let [N_str, ...uvw_str] = fs.readFileSync("/dev/stdin", "utf8").trim().split('\n');

let N = Number(N_str);
let colors: boolean[] = new Array(N).fill(false);


type weight = number;
let tree: Map<number, [number, weight][]> = new Map();

for(let i=0; i<N-1; i++) {
    // u < v
    let [u, v, w] = uvw_str[i].split(' ').map(Number);
    u -= 1;
    v -= 1;
    for(let [p, child] of [[u, v], [v, u]]) {
        if (!tree.has(p)) {
            tree.set(p, []);
        }
        tree.get(p).push([child, w]);
    }
}

let stack: [number, number | null][] = [[0, null]]; // list of pair of (node, parent)

while (stack.length != 0) {
    let [node, prev] = stack.pop()
    if (tree.has(node)) {
        for(let [child, weight] of tree.get(node)) {
            if (child == prev)
                continue;
            if (weight%2 == 0) {
                colors[child] = colors[node];
            } else {
                colors[child] = !colors[node];
            }
            stack.push([child, node]);
        }
    }
}

for(let i=0; i<N; i++) {
    console.log((colors[i]?0:1));
}
