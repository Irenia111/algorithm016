/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // 。。。这个要怎么bfs
    // 拿一个栈模拟递归压栈
    // https://leetcode-cn.com/problems/generate-parentheses/solution/hui-su-suan-fa-by-liweiwei1419/
    if (n === 0) return []
    let res = []
    let stack = []
    stack[0] = {
        left: n,
        right: n,
        res: ''
    }
    while (stack.length > 0) {
        let cur = stack.shift()
        if(cur.left === 0 && cur.right === 0)res.push(cur.res)
        if(cur.left > 0)stack.push({
            left: cur.left - 1,
            right: cur.right,
            res: cur.res + '('
        })
        if(cur.right > 0 && cur.left < cur.right)stack.push({
            left: cur.left,
            right: cur.right - 1,
            res: cur.res + ')'
        })
 
    }
    return res
};