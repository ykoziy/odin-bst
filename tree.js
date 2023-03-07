import Node from './node.js';

export default class Tree {
  constructor(array) {
    //avoid handling duplicates
    const sorted = [...new Set(array)].sort((a, b) => a - b);
    this.root = this.buildTree(sorted);
  }

  buildTree = (array) => {
    if (array.length === 0) {
      return null;
    }
    const mid = Math.floor(array.length / 2);
    const root = new Node(array[mid]);
    root.left = this.buildTree(array.slice(0, mid));
    root.right = this.buildTree(array.slice(mid + 1));
    return root;
  };

  insert = (data, root = this.root) => {
    // if (this.#exists(data)) {
    //   return null;
    // }
    if (root === null) {
      return new Node(data);
    }
    if (data < root.data) {
      root.left = this.insert(data, root.left);
    } else if (data > root.data) {
      root.right = this.insert(data, root.right);
    }
    return root;
  };

  delete = () => {};

  find = (data, root = this.root) => {
    if (root === null || root.data === data) {
      return root;
    }
    if (data > root.data) {
      return this.find(data, root.right);
    } else {
      return this.find(data, root.left);
    }
  };

  levelOrder = (callbackFn) => {
    const queue = [this.root];
    const result = [];
    while (queue.length > 0) {
      let currentNode = queue.shift();
      if (callbackFn) {
        callbackFn(currentNode);
      } else {
        result.push(currentNode.data);
      }

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    if (result.length > 0) {
      return result;
    }
  };

  /// Visit the node in this order: root, left, right
  preorder = (callbackFn, root = this.root, result = []) => {
    if (!this.root) {
      return [];
    }
    if (root === null) {
      return;
    }
    if (callbackFn) {
      callbackFn(root);
    } else {
      result.push(root.data);
    }
    this.preorder(callbackFn, root.left, result);
    this.preorder(callbackFn, root.right, result);
    if (result.length > 0) {
      return result;
    }
  };

  /// Visit the node in this order: left, root, right
  inorder = (callbackFn, root = this.root, result = []) => {
    if (!this.root) {
      return [];
    }
    if (root === null) {
      return;
    }
    this.inorder(callbackFn, root.left, result);
    if (callbackFn) {
      callbackFn(root);
    } else {
      result.push(root.data);
    }
    this.inorder(callbackFn, root.right, result);
    if (result.length > 0) {
      return result;
    }
  };

  /// Visit the node in this order: left, right, root
  postorder = (callbackFn, root = this.root, result = []) => {
    if (!this.root) {
      return [];
    }
    if (root === null) {
      return;
    }
    this.postorder(callbackFn, root.left, result);
    this.postorder(callbackFn, root.right, result);
    if (callbackFn) {
      callbackFn(root);
    } else {
      result.push(root.data);
    }
    if (result.length > 0) {
      return result;
    }
  };

  height = (node = this.root) => {
    if (node === null) {
      return -1;
    }
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    if (leftHeight > rightHeight) {
      return leftHeight + 1;
    } else {
      return rightHeight + 1;
    }
  };

  depth = (node, root = this.root, depth = -1) => {
    if (node === null) {
      return -1;
    }
    if (node === root) {
      return depth + 1;
    }
    if (node.data < root.data) {
      return this.depth(node, root.left, depth + 1);
    } else {
      return this.depth(node, root.right, depth + 1);
    }
  };

  isBalanced = (root = this.root) => {
    if (root === null) {
      return true;
    }
    const diff = Math.abs(this.height(root.left) - this.height(root.right));
    return (
      diff <= 1 && this.isBalanced(root.left) && this.isBalanced(root.right)
    );
  };

  rebalance = () => {
    const elements = this.inorder();
    console.log(elements);
    this.root = this.buildTree(elements);
  };

  print = () => {
    this.#prettyPrint(this.root);
  };

  #exists = (data, root = this.root) => {
    return !!this.find(data, root);
  };

  #prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      this.#prettyPrint(
        node.right,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false,
      );
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.#prettyPrint(
        node.left,
        `${prefix}${isLeft ? '    ' : '│   '}`,
        true,
      );
    }
  };
}
