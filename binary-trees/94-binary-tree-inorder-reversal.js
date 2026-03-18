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
var inorderTraversal = function (root) {
  function recursiveInorder(root, arr) {
    if (root === null) {
      return;
    }

    recursiveInorder(root.left, arr);

    arr.push(root.val);

    recursiveInorder(root.right, arr);
  }

  const arr = [];
  recursiveInorder(root, arr);

  return arr;
};
