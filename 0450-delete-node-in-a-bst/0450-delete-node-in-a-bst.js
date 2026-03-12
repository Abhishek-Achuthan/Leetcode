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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
     function deleteNodeHelper(node,val) {
        if(!node) return null;

        if(val < node.val) {
            node.left = deleteNodeHelper(node.left,val);
        }else if(val > node.val){
            node.right = deleteNodeHelper(node.right,val);
        }else {

            if(!node.left && !node.right) {
                return null;
            }

            if(!node.left) {
                return node.right
            }

            if(!node.right) {
                return node.left
            }

            let successor = findMin(node.right);
            node.val = successor.val;
            node.right = deleteNodeHelper(node.right,successor.val);
            
        }
        return node;
    }

    function findMin(node){
        while(node.left!==null) {
            node = node.left;
        }
        return node;
    }
  return deleteNodeHelper(root,key)
};