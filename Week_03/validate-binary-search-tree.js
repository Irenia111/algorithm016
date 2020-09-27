/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    // 二叉搜索树累加
    // 借助 中序遍历二叉搜索树 输出 由小到大的顺序数组
    // 我猜右子树的合，要比左子树小
    // 这道题用递归，怎么求解🤔🤔 --> 和求众数那道题，记录cur pre节点的做法有些相似
    // 先拿暴解做一遍吧
    let arr = []
    let result = true
    function helper (root) {
        if (root == null) return
        helper(root.left)
        arr.push(root.val)
        helper(root.right)
    }

    helper(root)

    for (let i = 1; i < arr.length; i++) {
        if(arr[i - 1] >= arr[i]) {
            result = false
            break
        }
    }

    return result

};