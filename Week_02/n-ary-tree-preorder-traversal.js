/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    // 递归实现
    let result = []
    function helper (root) {
        if (root == null) return
        result.push(root.val)
        if (root.children) {
            root.children.forEach(item => helper(item))
        }
    }
    helper(root)
    return result
};