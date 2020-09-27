/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // https://mp.weixin.qq.com/s/OlpaDhPDTJlQ5MJ8tsARlA
    // 前序遍历的第一个是根节点
    // 中序遍历靠左的位置是左子树，右边是右子树，可以通过中序遍历结果确定前序遍历index的位置
    function helper (preorder, inorder, prestart, preend, instart, inend) {

        if(prestart > preend) return null

    
        let rootindex = 0
        for (let i = instart; i <= inend; i++) {
            if(inorder[i]  === preorder[prestart]) {
                rootindex = i
                break
            }
        }

        let root = new TreeNode(preorder[prestart])
        root.left = helper(preorder, inorder, prestart + 1, prestart + (rootindex - instart), instart, rootindex - 1)
        root.right = helper(preorder, inorder, prestart + (rootindex - instart) + 1,preend, rootindex + 1, inend)
        return root
    }
    
    return helper(preorder,inorder, 0, preorder.length - 1, 0, preorder.length - 1)

};