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
    arr = [...new Set(arr)];
    arr = mergeSort(arr);

    //create root node
    let mid = Math.floor(arr.length / 2);
    console.log(arr.length / 2);
    let rootNode = new Node(arr[mid]);
    let currentNode = rootNode;
    arr[mid] = null;
    let start = 0;
    let end = arr.length - 1;
    this.root = rootNode;
    // if left subtree exists
    if (arr[start] < rootNode.data) {
      this.root.left = new Node(arr[start]);
      start++;
    }
    // if right subtree exists
    if (arr[end] > rootNode.data) {
      this.root.right = new Node(arr[mid + 1]);
    }
    currentNode = this.root.left;
    while (arr[start] !== null) {
      if (arr[start] < currentNode.data) {
        currentNode.left = new Node(arr[start]);
        currentNode = currentNode.left;
      } else {
        currentNode.right = new Node(arr[start]);
        currentNode = currentNode.right;
      }
      start++;
    }
    currentNode = this.root.right;
    for (let i = mid + 2; i < arr.length; i++) {
      console.log(arr[i]);
    }
    console.log(arr);
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
