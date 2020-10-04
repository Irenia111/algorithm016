/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root == null) return []
    let res = []
    let stack = []
    stack.push(root)
    while(stack.length > 0) {
        let length = stack.length
        let list = []
        while (length > 0) {
            let item = stack.shift()
            list.push(item.val)
            if(item.left)stack.push(item.left)
            if(item.right)stack.push(item.right)
            length--
        }
        
        res.push(list.slice(0))
        
    }
    
    return res
};