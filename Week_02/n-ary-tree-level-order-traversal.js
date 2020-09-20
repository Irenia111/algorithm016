/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
// 深度优先，递归实现，将每一层进行保存
    let result = []

    function helper (root, index) {
        if (root == null) return
        if (!result[index]) {
            result[index] = []
        }
        result[index].push(root.val)
        for (let i = 0; i < root.children.length; i++) {
            helper(root.children[i], index + 1)
        }
    }

    helper(root, 0)
    
    return result
};

var levelOrder1 = function(root) {
    // 让我们用迭代实现以下(*￣︶￣)(*￣︶￣)
    // 通过栈模拟调用栈, 层序遍历的话，是用队列模拟
    if (root == null) return []
    let result = []
    let queue = [root]
    while(queue.length > 0) {
        let n = queue.length
        let list = []
        for(let i = 0; i < n; i++) {
            let cur = queue.shift()
            list.push(cur.val)
            if(cur.children){
                for(let j = 0; j < cur.children.length; j++) {
                    queue.push(cur.children[j])
                }
            }
        }
        result.push(list)
    }
    
    return result
};