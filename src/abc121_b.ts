import * as fs from 'fs';

const lines = fs.readFileSync('/dev/stdin', 'utf8').split('\n');

const [N, M, C] = lines[0].split(' ').map(Number);
const B = lines[1].split(' ').map(Number);
let answer = 0;

for(let i=2; i<N+2; i++) {
	let A = lines[i].split(' ').map(Number);
	if (A.map((a, i) => {return a*B[i]}).reduce((a, b) => {return a+b}, 0)+C > 0) {
		answer += 1;
	}
}

console.log(answer);
