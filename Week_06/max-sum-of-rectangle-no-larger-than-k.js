/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
    // 面积要最大，和要小于k
    // https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k/solution/javacong-bao-li-kai-shi-you-hua-pei-tu-pei-zhu-shi/
    // https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k/solution/cpp-zhe-shi-yi-ge-chao-shi-de-dong-tai-gui-hua-by-/
    let m = matrix.length
    let n = matrix[0].length
    let dp = Array.from( new Array(m + 1), () => new Array(n + 1))
    for (let i = 0; i < m + 1; i++) {
        dp[i][0] = 0
    }
    for (let i = 0; i < n + 1; i++) {
        dp[0][i] = 0
    }
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + matrix[i - 1][j - 1]  
        }
    }
    let res = Number.NEGATIVE_INFINITY

    for (let i1 = 0; i1 < m; i1++){
            for (let i2 = i1+1 ; i2 <= m; i2++){
                for (let j1 = 0; j1 < n; j1++){
                    for (let j2 = j1+1;  j2 <= n; j2++){
                        let total =  dp[i2][j2] - dp[i2][j1] - dp[i1][j2]  + dp[i1][j1]
                        if (total == k) return total
                        if ( total <k ) res = Math.max(total,res)
                    }
                }
            }
        }



    return res
    
};