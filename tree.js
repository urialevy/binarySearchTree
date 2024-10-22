import { Node } from "./node.js";
import { mergeSort } from "./mergeSort.js";
export class Tree {
  constructor(arr) {
    this.buildTree(arr);
    this.root;
  }
  buildTree(arr) {
    if (arr.length == 0 || arr.length == 1) {
      this.root = arr[0];
    }
    arr = mergeSort(arr);
    arr = [...new Set(arr)];
    //create root node
    let mid = Math.floor(arr.length / 2);
    let rootNode = new Node(arr[mid]);
    arr[mid] = null;
    let start = 0;
    let end = arr.length - 1;
    this.root = rootNode;
    // if left subtree exists
    while (arr[start] !== null) {
      this.root.left = new Node(arr[start]);
      start++;
    }
    console.log(arr[start]);
    // if right subtree exists
    if (arr[end] > rootNode.data) {
      this.root.right = new Node(arr[end]);
    }
    return this.root;
  }
  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}
