import * as fs from "fs";


let [A, B] = fs.readFileSync("/dev/stdin", "utf8").split(" ").map(Number);

let count = 0;
let socket = 1;

while (socket < B) {
	socket = socket-1+A;
	count += 1;
}

console.log(count);
