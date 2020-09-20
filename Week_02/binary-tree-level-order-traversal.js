/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root == null) return []
    let result = []
    // 广度优先，在迭代前序遍历的基础上，加入对当前层数的记录
    // 这里使用的是队列
    let queue = [root]

    while(queue.length > 0) {
        // 通过queue的长度，标注当前层 节点的个数
        let n = queue.length 
        let list = []
        for(let i = 0; i < n; i++) {
            // 取出当前层的节点
            let cur = queue.shift()
            list.push(cur.val)
            // 将当前节点的子节点压入
            if(cur.left)queue.push(cur.left)
            if(cur.right)queue.push(cur.right)
        }

        // 将当前层的节点压入答案
        result.push(list)
        
    }

    return result
}

var levelOrder1 = function(root) {
    // 深度优先，将每一层进行保存
    let result = []

    function helper (root, index) {
        if (root == null) return
        if (!result[index]) {
            result[index] = []
        }
        result[index].push(root.val)
        helper(root.left, index + 1)
        helper(root.right, index + 1)
    }

    helper(root, 0)
    return result
};