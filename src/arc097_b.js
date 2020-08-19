"use strict";
exports.__esModule = true;
var fs = require("fs");
var disjoint_set_1 = require("./disjoint_set");
var _a = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n"), line1 = _a[0], line2 = _a[1], lines = _a.slice(2);
var _b = line1.split(" ").map(Number), N = _b[0], M = _b[1];
var P = line2.split(" ").map(function (n) { return Number(n) - 1; });
var X = [], Y = [];
var disjointSet = new disjoint_set_1.DisjointSet(N);
for (var i = 0; i < M; i++) {
    var _c = lines[i].split(" ").map(Number), x = _c[0], y = _c[1];
    disjointSet.union(x - 1, y - 1);
}
var answer = 0;
for (var i = 0; i < N; i++) {
    if (disjointSet.find(i) == disjointSet.find(P[i])) {
        answer += 1;
    }
}
console.log(answer);
