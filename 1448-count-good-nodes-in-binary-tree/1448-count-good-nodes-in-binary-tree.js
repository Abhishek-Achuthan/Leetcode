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
var goodNodes = function(root) {
    let count = 0;
    function findGood(highest,root) {
        if(!root) return;
        if(root.val >= highest) {
            count++;
            highest = root.val;
        }
        findGood(highest,root.left);
        findGood(highest,root.right);
    }
    findGood(-Infinity,root)
    return count;
};