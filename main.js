import { Tree } from "./tree.js";

let test = new Tree([7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

test.deleteItem(3);
test.deleteItem(324);

test.insert(25);
test.insert(21);

test.deleteItem(23);
test.deleteItem(5);
test.insert(9001);
test.insert(9000);
test.insert(9002);
test.prettyPrint(test.root);
test.deleteItem(4);
test.deleteItem(21);
test.deleteItem(6345);
test.prettyPrint(test.root);
