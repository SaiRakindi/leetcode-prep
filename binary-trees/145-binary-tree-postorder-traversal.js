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
var postorderTraversal = function (root) {
  let postOrderArray = [];

  if (!root) return postOrderArray;

  let stack1 = [];
  let stack2 = [];

  stack1.push(root);

  while (stack1.length > 0) {
    const node = stack1.pop();
    stack2.push(node.val);

    if (node.left) stack1.push(node.left);

    if (node.right) stack1.push(node.right);
  }

  while (stack2.length > 0) {
    postOrderArray.push(stack2.pop());
  }

  return postOrderArray;
};
