/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // 不想用全局变量了，有其他方法么(⊙︿⊙)(⊙︿⊙)
    let deepth = 0
    // 层序遍历
    function findDeepth (root, index) {
        if (root == null) {
            deepth = Math.max(deepth, index)
            return 
        }

        findDeepth (root.right, index + 1)
        findDeepth (root.left, index + 1)
    }

    findDeepth(root, 0)

    return deepth
};