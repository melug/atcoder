import * as fs from "fs";

const [line1, ...linesA] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let N = Number(line1)

let B: number[] = linesA.slice(0, N).map((n) => {return Number(n)-1});
let visited: boolean[] = Array(N).fill(false);

let position = 0;
let steps = 0;

while (position != 1 && visited[position] == false) {
	visited[position] = true;
	position = B[position];
	steps += 1;
}

if (position == 1)
	console.log(steps);
else
	console.log(-1);
