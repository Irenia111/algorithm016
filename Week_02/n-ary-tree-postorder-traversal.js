/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    // 递归实现
    let result = []
    function helper (root) {
        if (root == null) return
        if (root.children) {
            for (let i = 0; i < root.children.length; i++) {
                helper(root.children[i])
            }
        }
        result.push(root.val)
    }

    helper(root)
    return result
};