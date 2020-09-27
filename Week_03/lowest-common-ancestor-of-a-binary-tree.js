/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 想不出来o(╥﹏╥)oo(╥﹏╥)o
    
    function find (root) {
        if (root == null) return null

        // 如果p或q出现了，那么返回它
        if (root == p || root == q) return root;

        // 由低向上查找，只要右子树和左子树都有，那么就返回该节点
        let left = find(root.left)
        let right = find(root.right)

        // 如果两边都找到了，那么该节点就是要找的节点
        if(right && left) {
            return root
        } else if (right && !left){
            // 两个点都在左子树上，说明在左边已经找到了lca，返回left
            return right
        } else if (!right && left) {
            // 在右边，返回right
            return left
        } else {
            return null
        }
        
    }

    return find(root)

};