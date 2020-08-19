"use strict";
exports.__esModule = true;
exports.DisjointSet = void 0;
var DisjointSet = /** @class */ (function () {
    function DisjointSet(size) {
        this.size = size;
        this.parents = new Array(size);
        for (var i = 0; i < size; i++)
            this.parents[i] = i;
    }
    DisjointSet.prototype.find = function (node) {
        if (this.parents[node] != node)
            this.parents[node] = this.find(this.parents[node]);
        return this.parents[node];
    };
    DisjointSet.prototype.union = function (node1, node2) {
        var parent1 = this.find(node1), parent2 = this.find(node2);
        if (parent1 != parent2)
            this.parents[parent2] = parent1;
    };
    return DisjointSet;
}());
exports.DisjointSet = DisjointSet;
function test() {
    var disjointSet = new DisjointSet(5);
    disjointSet.union(0, 4);
    disjointSet.union(1, 3);
    disjointSet.union(2, 2);
    for (var i = 0; i < 5; i++) {
        console.log("i=" + i + " component=" + disjointSet.find(i));
    }
}
