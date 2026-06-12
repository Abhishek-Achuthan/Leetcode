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
 * @return {number}
 */
var maxDepth = function (root) {
  let max =0;
  if(!root) return 0
  function findMax(root,count=1){
    if(!root) return;
    if(!root.left&&!root.right) {
        max = count > max ?count : max;
    }
    findMax(root.left,count + 1);
    findMax(root.right,count + 1);
   }
   findMax(root);
   return max
};