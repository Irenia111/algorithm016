## 不同路径 2 状态转移方程
```js
let dp = Array.from(new Array(n), () => new Array(m).fill(0))
    dp[0][0] = 1
    for (let i = 1; i < n; i++) if(obstacleGrid[i][0] !== 1)dp[i][0] = dp[i - 1][0]
    for (let i = 1; i < m; i++) if(obstacleGrid[0][i] !== 1)dp[0][i] = dp[0][i - 1]
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if( obstacleGrid[i][j] !== 1) dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
```