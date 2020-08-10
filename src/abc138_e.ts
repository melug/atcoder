import * as fs from "fs";

const [s, t] = fs.readFileSync("/dev/stdin", "utf8").split("\n");


function solve(s: string, t: string): number {
	let nearestChars: Map<string, number> = new Map();
	let array: Array<Map<string, number>> = new Array(s.length);

	for(let i=s.length-1; i>=0; i--) {
		array[i] = new Map(nearestChars);
		array[i].set(s[i], i);
		nearestChars = array[i];
	}
	let t_i = 0, s_i = 0;
	let consumed = 0;
	while (t_i < t.length) {
		if (array[s_i].has(t[t_i])) {
			consumed += array[s_i].get(t[t_i])-s_i+1;
			s_i = array[s_i].get(t[t_i])+1;
			t_i += 1;
		} else if (array[0].has(t[t_i])) {
			consumed += array.length-s_i+array[0].get(t[t_i])+1;
			s_i = array[0].get(t[t_i])+1;
			t_i += 1
		} else {
			return -1
		}
		s_i %= s.length;
	}
	return consumed;
}

console.log(solve(s, t));
