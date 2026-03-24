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
 * @return {boolean}
 */
var isBalanced = function (root) {
  //Brute force approach

  function getHeight(root) {
    if (!root) return 0;

    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);

    return 1 + Math.max(leftHeight, rightHeight);
  }

  if (!root) return true;

  let leftHeight = getHeight(root.left);
  let rightHeight = getHeight(root.right);

  if (
    Math.abs(leftHeight - rightHeight) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
    return true;

  return false;

  // function getHeight (root) {
  //     //Optimal approach;

  //     if (!root) return 0;

  //     let leftHeight = getHeight(root.left);
  //     let rightHeight = getHeight(root.right);

  //     if (leftHeight === - 1 || rightHeight === -1) return -1;

  //     if (Math.abs(leftHeight - rightHeight) > 1) return -1;

  //     return 1 + Math.max(leftHeight, rightHeight)
  // }

  // return getHeight(root) !== -1;
};
