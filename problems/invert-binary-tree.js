/*
https://leetcode.com/problems/invert-binary-tree/description/

Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1

*/

/* Binary tree */
const tree = {
  left: {
    left: {
      value: 1
    },
    right: {
      value: 3
    },
    value: 2
  },
  right: {
    left: {
      value: 6
    },
    right: {
      value: 9
    },
    value: 7
  },
  value: 4
};

/* A simple binary tree console visualization function. Displays a binary tree like so:

4
27
1369

*/
const visualizeTree = (node) => {
  if (!node) return;

  console.log(node.value);
  var children = [node.left, node.right];
  var tmp;
  while(children.length) {
    console.log(children.reduce((acc, cur) => acc + cur.value, ''));
    tmp = [];
    children.forEach(i => {
      if (i.left) {
        tmp.push(i.left);
      }
      if (i.right) {
        tmp.push(i.right);
      }
    });
    children = tmp;
  }
}

/* Binary tree invertion function */
const invertBinaryTree = (root) => {
  if (!root) return;

  var left = root.left;
  root.left = invertBinaryTree(root.right);
  root.right = invertBinaryTree(left);

  return root;
}

console.log('# Initial Tree:');
console.log(visualizeTree(tree));

console.log('# Inverted Tree:');
console.log(visualizeTree(invertBinaryTree(tree)));
