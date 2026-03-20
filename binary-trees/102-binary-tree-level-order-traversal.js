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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let levelOrderTraversalArray = [];

  if (!root) return levelOrderTraversalArray;

  let queue = [];

  queue.push(root);

  while (queue.length) {
    let size = queue.length;

    const level = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    levelOrderTraversalArray.push(level);
  }

  return levelOrderTraversalArray;
};
