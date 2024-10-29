import { Tree } from "./tree.js";

let test = new Tree([7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

test.insert(25);
test.insert(21);
test.insert(69);

test.insert(9001);
test.insert(9000);
test.insert(9002);

test.insert(20);
test.prettyPrint(test.root);
test.deleteItem(21);
test.prettyPrint(test.root);
// test.deleteItem(3);
// test.prettyPrint(test.root);
// test.deleteItem(324);
// test.prettyPrint(test.root);
