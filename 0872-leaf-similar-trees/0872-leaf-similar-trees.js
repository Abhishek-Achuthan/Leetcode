/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
   let firstLeafs = [];
   let secondLeafs = [];

   function checkLeafs(root,arr) {
       if(!root) return;
       if(!root.left && !root.right) arr.push(root.val);
       checkLeafs(root.left,arr);
       checkLeafs(root.right,arr);
   }

   checkLeafs(root1,firstLeafs)
   checkLeafs(root2,secondLeafs)

   return firstLeafs.toString() === secondLeafs.toString()
};