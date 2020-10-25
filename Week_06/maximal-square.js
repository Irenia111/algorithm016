/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    /* 
        思路一 DP 
        dp[i, j] 以坐标点i,j作为正方形右下角的最大正方形长度
        matrix[i, j] === '1' && i && j 
        dp[i, j] = Math.min(左， 上， 左上) + 1
        复杂度：时间 O(N*M) 空间 O(N*M) （新开二维辅助dp数组）
    */
    
    if (!matrix || !matrix.length) return 0

    const row = matrix.length, col = matrix[0].length, dp = []
    for (let i = 0; i < row; i++) dp.push(new Array(col).fill(0))

    let size = 0

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            // !i || !j 巧妙处理了 第一行于第一列的边界问题
            if (!i || !j || matrix[i][j] === '0') {
                dp[i][j] = matrix[i][j] - '0' // 利用减号 触发的隐式类型转换 巧妙的将远matrix[i][j] 中的string值转换为dp[i][j]中的Number 确保了dp中的类型一致
            } else {
                // 当前项作为正方形的右下点 还取决于 左、上、左上三处位置中的最小值
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
            }
            size = Math.max(size, dp[i][j])
        }
    }

    return size ** 2


    /* 
        思路二（优化）DP + 一维dp + 上一项pre 减少空间复杂度O(n)
        复杂度：时间 O(N*M) 空间 O(N) （新开一维dp辅助数组）
        从二维dp 转化为 一维dp 
        dp[i][j - 1]       左项 => dp[j]
        dp[i - 1][j]       上项 => pre
        dp[i - 1][j - 1] 左上项 => dp[j - 1]
    */
    if (!matrix || !matrix.length) return 0

    const row = matrix.length, col = matrix[0].length, dp = new Array(col).fill(0)

    let size = 0, pre = 0, temp

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            temp = dp[j]
            if (!i || !j || matrix[i][j] === '0') {
                dp[j] = matrix[i][j] - '0'
            } else {
                dp[j] = Math.min(dp[j], pre, dp[j - 1] ) + 1
            }
            size = Math.max(size, dp[j])
            pre = temp
        }
    }

    return size ** 2


};

// 参考：https://leetcode-cn.com/problems/maximal-square/solution/dp-yi-wei-shu-zu-you-ya-shi-xian-by-floretpig/
