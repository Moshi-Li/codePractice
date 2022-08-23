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
  return root
    ? []
        .concat([root.val])
        .concat(root.left ? preorderTraversal(root.left) : [])
        .concat(root.right ? preorderTraversal(root.right) : [])
    : [];
};
