import * as fs from "fs";

const [H, W] = fs.readFileSync("/dev/stdin", "utf8").split(" ").map(Number);

if (H == 1 || W == 1) {
	console.log(0);
} else {

}
