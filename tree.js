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
    if (this.root == null) {
      this.root = new Node(value);
      return;
    }
    if (value == root.data) {
      return;
    }
    if (value < root.data) {
      if (root.left == null) {
        root.left = new Node(value);
        return;
      }
      root = root.left;
      this.insert(value, root);
    }
    if (value > root.data) {
      if (root.right == null) {
        root.right = new Node(value);
        return;
      }
      root = root.right;
      this.insert(value, root);
    }
  }
  deleteItem(value, root = this.root, parentNode = null) {
    if (root == null) {
      console.log(`${value} not found`);
      return;
    }

    if (value < root.data) {
      this.deleteItem(value, root.left, root);
    } else if (value > root.data) {
      this.deleteItem(value, root.right, root);
    } else {
      // No children, i.e. leaf node
      if (root.left == null && root.right == null) {
        value < parentNode.data
          ? (parentNode.left = null)
          : (parentNode.right = null);
      }

      // Two children
      if (root.left !== null && root.right !== null) {
        // find child node on the left that has the highest value
        let target = root;
        let p = root;
        let replacement = root.left;

        while (replacement.right) {
          p = replacement;
          replacement = replacement.right;
        }
        console.log(`${replacement.data} to replace ${target.data}`);
        if (replacement.left !== null) {
          target.data = replacement.data;
          target.left = replacement.left;
          replacement.left = null;
          p.right = null;

          return;
        }
        // if replacement node is a leaf node
        if (replacement.left == null) {
          target.data = replacement.data;
          p.left = null;
        }
        return;
      }
      // One child
      if (root.left || root.right) {
        // left leaf
        if (root.left) {
          if (root.data > parentNode.data) {
            parentNode.right = root.left;
          }
          if (root.data < parentNode.data) {
            parentNode.left = root.left;
          }

          return;
        }
        // right leaf
        if (root.right) {
          if (root.data > parentNode.data) {
            parentNode.right = root.right;
          }
          if (root.data < parentNode.data) {
            parentNode.left = root.right;
          }
        }
        return;
      }

      return;
    }
  }
  find(value, root = this.root) {
    if (root == null) {
      console.log(`${value} not found.`);
      return;
    }
    if (value == root.data) {
      console.log(root);
      return root;
    }
    if (value < root.data) {
      this.find(value, root.left);
    }
    if (value > root.data) {
      this.find(value, root.right);
    }
  }
}
