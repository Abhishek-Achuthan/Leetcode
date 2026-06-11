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
    let leafNode1 = [];
    let leafNode2 = [];

    function traverse(root,arr) {
        if(!root) return;
        if(!root.left && !root.right) arr.push(root.val);
        traverse(root.left,arr);
        traverse(root.right,arr);
    }

    traverse(root1,leafNode1);
    traverse(root2,leafNode2);
    let str1 =leafNode1.toString();
    let str2 =leafNode2.toString();
    return str1 === str2
    
};