import * as fs from "fs";

const [A, B, C, D, E, F] = fs.readFileSync("/dev/stdin", "utf8").split(" ").map(Number);

let highestDensity = 0;
let highestSugar = 0, highestWater = 0;

for(let a=A; a<=30; a++) {
	for(let b=B; b<=30; b++) {
		for(let c=C; c<=30; c++) {
			for(let d=D; d<=30; d++) {
				let water = 100*a+100*b;
				let sugar = c+d;
				if (sugar/water <= E/100 && water+sugar <= F && sugar/water > highestDensity) {
					highestDensity = sugar/water;
					highestSugar = sugar;
					highestWater = water;
				}
			}
		}
	}
}

console.log(highestWater+highestSugar, highestSugar);
