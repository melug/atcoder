import * as fs from "fs";

class MaxHeap<T> {
	private items: Array<T>;
	constructor(items: Array<T>) {
		this.items = items;
		for(let ix: number = this.items.length; ix >= 0; ix--) {
			this.bubbleDown(ix);
		}
	}
	push(item: T): void {
		let i: number = this.items.length;
		this.items.push(item);
		this.bubbleUp(i);
	}
	pop(): T {
		let toReturn: T = this.items[0];
		let poppedElement: T = this.items.pop();
		if (this.items.length > 0) {
			this.items[0] = poppedElement;
			this.bubbleDown(0);
		}
		return toReturn;
	}
	peek(): T {
		return this.items[0];
	}
	size(): number {
		return this.items.length;
	}
	private bubbleUp(ix: number): void {
		if (ix != 0) {
			let p: number = Math.floor((ix-1)/2);
			if (this.items[ix] > this.items[p]) {
				[this.items[ix], this.items[p]] = [this.items[p], this.items[ix]];
				this.bubbleUp(p);
			}
		}
	}
	private bubbleDown(ix: number): void {
		let min_index = ix;
		for(let i = 1; i < 3; i++) {
			if (2*ix+i < this.items.length && this.items[min_index] < this.items[2*ix+i]) {
				min_index = 2*ix+i;
			}
		}
		if (min_index != ix) {
			[this.items[min_index], this.items[ix]] = [this.items[ix], this.items[min_index]]
			this.bubbleDown(min_index);
		}
	}
}

let [line1, line2] = fs.readFileSync("/dev/stdin", "utf8").split("\n");
let [N, M] = line1.split(" ").map(Number);
let A = line2.split(" ").map(Number);

let maxHeap: MaxHeap<number> = new MaxHeap(A);

while (M > 0) {
	maxHeap.push(Math.floor(maxHeap.pop()/2));
	M -= 1;
}

let total = 0;
while (maxHeap.size() > 0) {
	total += maxHeap.pop();
}

console.log(total);
