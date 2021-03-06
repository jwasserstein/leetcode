/*
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.
*/

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
var diameterOfBinaryTree = function(root) {
    if(!root) return 0;
    
    let maxDia = 0;
    function recursiveDia(node){
        let left = 0;
        if(node.left) left = recursiveDia(node.left) + 1;
        let right = 0;
        if(node.right) right = recursiveDia(node.right) + 1;
        
        const dia = left + right;
        maxDia = Math.max(maxDia, dia);
        return Math.max(left, right);
    }
    
    recursiveDia(root);
    return maxDia;
};