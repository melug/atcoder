import * as fs from "fs";

let N = Number.parseInt(fs.readFileSync("/dev/stdin", "utf8"));


function solve() {
	for(let x=1; x<50001; x++) {
		if (Math.floor(1.08*x) == N) {
			return x;
		}
	}
	return ':(';
}

console.log(solve())
