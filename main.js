import { Node } from "./node.js";
import { Tree } from "./tree.js";
// let test = new Tree([0, 1, 1, 2, 3, 4]);
// test.prettyPrint(test.root);
// let test2 = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
// test2.prettyPrint(test2.root);
let test = new Tree([1, 2, 3, 4, 5, 6, 7]);
// test.root.left = new Node(2);
// test.root.left.right = new Node(3);
// test.root.left.left = new Node(1);
// test.root.left.left.right = new Node(20);
// test.root.right = new Node(7);
// test.root.right.right = new Node(8);
// test.root.right.left = new Node(6);

test.prettyPrint(test.root);
// test.DFS(test.root);
