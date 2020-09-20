/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
 // 递归实现
    let result = []
    function helper (root) {
        if (root == null) return
        // 下探左子树
        helper(root.left)
        // 根节点遍历
        result.push(root.val)
        // 下探右子树
        helper(root.right)
    }
    helper(root)
    return result
}
var inorderTraversal1 = function(root) {
// 迭代实现
    if (root == null) return [] 
    let result = []
    let stack = []
    while (stack.length > 0||root) {
       // 走到root的左子树底点
       while(root) {
            stack.push(root);
            root = root.left;
        }
        // 此时的栈顶是左子树的底端
        root = stack.pop()
        result.push(root.val)
        // 移动到右子树
        root = root.right
    }
    return result
};