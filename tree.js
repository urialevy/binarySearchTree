import { Node } from "./node.js";
import { mergeSort } from "./mergeSort.js";
export class Tree {
  constructor(arr) {
    this.buildTree(arr);
    this.root = null;
  }
  buildTree(arr) {
    let n = arr.length;
    if (n == 0) {
      return;
    }
    //create root node
    arr = mergeSort(arr);
    arr = [...new Set(arr)];
    let mid = Math.floor(n / 2);
    let rootNode = new Node(arr[mid]);
    let start = 0;
    let end = n - 1;
    this.root = rootNode;
    // if left subtree exists
    if (arr[start] < mid) {
      this.root.left = arr[start];
    }
    if (arr[end] > mid) {
      this.root.right = arr[end];
    }
    // if right subtree exists
  }
}
