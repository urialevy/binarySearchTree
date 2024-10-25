import { Node } from "./node.js";
import { mergeSort } from "./mergeSort.js";

export class Tree {
  constructor(arr) {
    arr = [...new Set(arr)];

    arr = mergeSort(arr);
    this.splitArr(arr);
  }
  buildTree(input) {
    if (!input) {
      return;
    }
    console.log(`TreeBuild input: ${input}`);
    if (!this.root) {
      this.root = new Node(input);
    }
    console.log(`building rest with ${input}`);
    this.buildRest(this.root, input);
  }

  buildRest(node, buildData) {
    console.log(`build data received: ${buildData}`);
    if (buildData < node.data) {
      if (node.left == null) {
        node.left = new Node(buildData);
        return;
      }
      this.buildRest(node.left, buildData);
    }
    if (buildData > node.data) {
      if (node.right == null) {
        node.right = new Node(buildData);
        return;
      }
      this.buildRest(node.right, buildData);
    }
  }

  splitArr(arr) {
    if (arr.length < 2) {
      console.log(`array: ${arr}. Already sorted with ${arr[0]}`);
      this.buildTree(arr[0]);
      return;
    }
    const midpoint = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, midpoint);
    const rightHalf = arr.slice(midpoint + 1, arr.length);
    console.log(`array: ${arr}. Midpoint: ${arr[midpoint]}`);
    this.buildTree(arr[midpoint]);
    return this.splitArr(leftHalf), this.splitArr(rightHalf);
  }
  DFS(n) {
    if (n == null) {
      return;
    }
    console.log(n.data);
    this.DFS(n.left);
    this.DFS(n.right);
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
