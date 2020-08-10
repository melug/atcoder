import * as fs from "fs";

const [line1, line2, ..._] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const [N, A, B] = line1.split(" ").map(Number);

let passedInternational = 0, passed = 0;


for(let i=0; i<N; i++) {
	if (passed < A+B && line2[i] != 'c') {
		if (line2[i] == 'a') {
			passed += 1;
			console.log('Yes');
		} else if (line2[i] == 'b' && passedInternational < B) {
			passedInternational += 1;
			passed += 1;
			console.log('Yes');
		} else {
			console.log('No');
		}
	} else {
		console.log('No');
	}
}
