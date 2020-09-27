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
var minDepth = function(root) {
    // 把最大深度改一下，就是最小深度
    if (root == null) return 0

    let deepth = -1

    function findDeepth (root, index) {
        if ( root == null) {
            // if(index <= deepth) deepth = index
            return
        }

        if (root.left == null && root.right == null) {
            if (index === 0) {
                deepth = 1
                return
            } else {
                // 排除deepth未辅助的情况
                // 记录最小的deepth值
                deepth = deepth === -1 ? index + 1 : Math.min(deepth, index + 1)
            }
            
        } 

        findDeepth(root.left, index + 1)
        findDeepth(root.right, index + 1)

        
        
    }

    findDeepth(root, 0)

    return deepth

};