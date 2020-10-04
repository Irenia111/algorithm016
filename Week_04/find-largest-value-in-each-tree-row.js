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
var largestValues = function(root) {
    if(root == null)return[]
    // 暴力解法就是递归，然后遍历
    let stack = []
    stack[0] = root
    let res = []
    while (stack.length > 0) {
        let length = stack.length
        // 给max赋足够小的初值
        let max = Number.NEGATIVE_INFINITY
        while (length > 0) {
            let node = stack.shift()
            max = Math.max(max, node.val)
            if(node.left) stack.push(node.left)
            if(node.right) stack.push(node.right)
            length--
        }
        res.push(max)
    }

    return res
    
};