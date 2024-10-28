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

    if (!this.root) {
      this.root = new Node(input);
    }

    this.buildRest(this.root, input);
  }

  buildRest(node, buildData) {
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
      this.buildTree(arr[0]);
      return;
    }
    const midpoint = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, midpoint);
    const rightHalf = arr.slice(midpoint + 1, arr.length);

    this.buildTree(arr[midpoint]);
    return this.splitArr(leftHalf), this.splitArr(rightHalf);
  }
  DFS(root) {
    if (root == null) {
      return;
    }
    console.log(root.data);
    this.DFS(root.left);
    this.DFS(root.right);
  }

  BFS(root) {
    let level = 1;
    if (root == null) {
      return;
    }
    let queue = [];
    queue.push(root);
    while (queue.length !== 0) {
      let current = queue.shift();
      console.log(current.data);
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
  }

  height(node) {
    if (node == null) return 0;
    else {
      let lheight = this.height(node.left);
      let rheight = this.height(node.right);
      if (lheight > rheight) return +lheight + 1;
      else return rheight + 1;
    }
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
  insert(value, root = this.root) {
    if (root == null) {
      this.root == new Node(value);
      return;
    }

    if (value < root.data) {
      console.log(`${value} is less than ${root.data}`);
      if (root.left == null) {
        console.log(`Inserting ${value}`);
        root.left = new Node(value);
        return;
      }
      if (value > root.left.data) {
        let node = new Node(value);

        node.left = root.left;
        console.log(node);
        root.left = node;
        return;
      }
      if (value < root.left.data) {
        root = root.left;
        console.log(`Recursive ${value} and node ${root.data}`);
        this.insert(value, root);
      }

      if (value > this.root.data) {
      }
    }
  }
  deleteItem(value) {}
}
