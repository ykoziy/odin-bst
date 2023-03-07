import Tree from './tree.js';

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

const randomArray = (size) => {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 30));
  }
  return array;
};

const array = randomArray(5);
const tree = new Tree(array);
tree.print();
console.log('Is the tree balanced?');
console.log(tree.isBalanced());
console.log('Printing using level order');
console.log(tree.levelOrder());
console.log('Printing using preorder: ');
console.log(tree.preorder());
console.log('Printing using inorder: ');
console.log(tree.inorder());
console.log('Printing using postorder: ');
console.log(tree.postorder());

console.log('Unbalancing the tree');
for (let i = 0; i < 5; i++) {
  tree.insert(Math.floor(Math.random() * 100) + 100);
}

console.log('Is the tree balanced?');
console.log(tree.isBalanced());
console.log('Balancing the tree');
tree.rebalance();
console.log('Printing using level order');
console.log(tree.levelOrder());
console.log('Printing using preorder: ');
console.log(tree.preorder());
console.log('Printing using inorder: ');
console.log(tree.inorder());
console.log('Printing using postorder: ');
console.log(tree.postorder());
