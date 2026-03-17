/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  //Recursive solution
  // const res = [];

  // function preorder(node) {
  //     if (!node) {
  //         return;
  //     }

  //     res.push(node.val);
  //     preorder(node.left);
  //     preorder(node.right);
  // }

  // preorder(root);
  // return res;

  //Stack solution
  const res = [];
  if (!root) return res;

  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    res.push(node.val);

    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }

  return res;
};
