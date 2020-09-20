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
var preorderTraversal = function(root) {
    // 前序遍历 递归实现
    let result = []
    function helper (root) {
        if (root == null) return
        result.push(root.val)
        helper(root.left)
        helper(root.right)
    }

    helper(root)

    return result
}
var preorderTraversal1 = function(root) {

    /**
     * 通过迭代实现，采用栈模拟调用栈
     */
    if (root == null) return []
    let result = []
    // 先在栈中存入root
    let stack = [root]
    let point = new TreeNode()

    while (stack.length > 0) {
        
        let cur = stack.pop()
        // 压入结果，节点访问完成
        result.push(cur.val)
        // 前序遍历 根 --》左 --》右
        // 压栈顺序 根 --》右 --》左 
        if (cur.right) stack.push(cur.right)
        if (cur.left) stack.push(cur.left)

    }
    return result
};