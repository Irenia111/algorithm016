/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // 除了递归，还有什么其它办法么
    // 应该除了中序遍历，前序和后序都ok
    function changeNode (root) {
        if (root == null) return

        let tmp = root.left
        root.left = root.right
        root.right = tmp

        changeNode(root.right)
        changeNode(root.left)

    }
    changeNode(root)

    return root

};