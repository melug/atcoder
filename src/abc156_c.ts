import * as fs from "fs";

const [_, line2] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
const X = line2.split(" ").map(Number);


function totalStamina(P: number): number {
	return X.reduce((S, x) => {
		return S+(x-P)*(x-P);
	}, 0);
}

let minimumStamina: number = Infinity;

for (let P=0; P<101; P++) {
	minimumStamina = Math.min(minimumStamina, totalStamina(P));
}

console.log(minimumStamina);
