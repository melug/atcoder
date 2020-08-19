import * as fs from "fs";

const [H, W] = fs.readFileSync("/dev/stdin", "utf8").split(" ").map(Number);

function solve(H: number, W: number): number {
	if (H == 1 || W == 1) {
		return 1;
	}
	if (H%2 == 0) {
		return Math.floor(H/2)*W;
	} else {
		let H1 = Math.floor(H/2);
		let H0 = H1+1;
		if (W%2 == 0) {
			return (H0+H1)*Math.floor(W/2);
		} else {
			let W1 = Math.floor(W/2);
			let W0 = W1+1;
			return W0*H0+W1*H1;
		}
	}
}

console.log(solve(H, W));
