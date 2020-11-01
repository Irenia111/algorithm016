/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    // 看起来像是岛屿数量，但是不包括 y = x
    // https://leetcode-cn.com/problems/friend-circles/solution/tong-guo-xun-zhao-dao-yu-ge-shu-de-dai-ma-jian-dan/
    let n = M.length
    let m = M[0].length
    let count = 0
    function dfs(i, j) {
        if (i >= n || i < 0 || j >= m || j < 0 || M[i][j] !== 1) return
        if (M[i][j] === 1) {
            M[i][j] = 2
            for (let k = 0; k < m; k++) {
                if (M[i][k] === 1) {
                    M[i][k] = 2
                    // 遍历应该是逐行遍历
                    dfs(k, i)
                }
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (M[i][j] === 1) {
                dfs(i, j)
                count++
            }
        }
    }

    return count
};