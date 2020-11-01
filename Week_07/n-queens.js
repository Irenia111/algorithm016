/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    if (n <= 0) return []
    let cols = new Set()
    let pie = new Set()
    let na = new Set()
    let res = []
    function build (row, cur) {
        if (row >= n) {
            // 这个展开的过程
            res.push([...cur])
            return
        }
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || pie.has(row - col) || na.has(row + col)) continue
            cur.push(col)
            cols.add(col)
            pie.add(row - col)
            na.add(row + col)

            build (row + 1, cur)

            cur.pop()
            cols.delete(col)
            pie.delete(row - col)
            na.delete(row + col)
        }
    }
    build(0, [])
    // 转换前的 result 存的是每个皇后的列的位置
    return res.map(ans => ans.map(row => 
        Array(n).fill('.').map((item, index) => 
        index === row ? 'Q':'.').join('')
    ))
};