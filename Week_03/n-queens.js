/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    /**
     * 1. 遍历列，当前列和行都只能有一个
     * 2. 对角线也不能存在
     * 
     * 每次压入一个行
     */
    if (n <= 0) return []
    let result = []
    // 记录现有皇后攻击范围
    const cols = new Set()
    const pie = new Set()
    const na = new Set()
    function dfs(row, cur) {
        // 记录结果
        if (row >= n) {
            result.push([...cur])
            return
        }
        // 遍历列
        for (let col = 0; col < n; col++) {
            // 如果当前的位置,在攻击范围，那么就跳过
            if (cols.has(col) || pie.has(row + col) || na.has(row - col)) continue
            // 处理当前层
            cols.add(col)
            pie.add(row + col)
            na.add(row - col)

            cur.push(col)

            // 递归调用
            dfs(row + 1, cur)

            // 消除当前层的记录
            cols.delete(col)
            pie.delete(row + col)
            na.delete(row - col)

            cur.pop()
        }
    }

    dfs(0, [])

    // 合成输出字符串数组
    // 转换前的 result 存的是每个皇后的列的位置
    return result.map(oneAnswer => oneAnswer.map(row => Array(n).fill('.')
            .map((s, i) => i === row ? 'Q' : '.').join('')))
};