

export class DisjointSet {
    parents: number[];

    constructor(readonly size: number) {
        this.parents = new Array(size);
        for(let i=0; i<size; i++)
            this.parents[i] = i;
    }

    find(node: number): number {
        if (this.parents[node] != node)
            this.parents[node] = this.find(this.parents[node]);
        return this.parents[node];
    }

    union(node1: number, node2: number): void {
        let parent1 = this.find(node1),
            parent2 = this.find(node2);
        if (parent1 != parent2)
            this.parents[parent2] = parent1;
    }
}


function test(): void {
    let disjointSet = new DisjointSet(5);

    disjointSet.union(0, 4);
    disjointSet.union(1, 3);
    disjointSet.union(2, 2);

    for(let i=0; i<5; i++) {
        console.log(`i=${i} component=${disjointSet.find(i)}`);
    }
}
