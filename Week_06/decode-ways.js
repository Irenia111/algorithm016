var numDecodings = function(s, dp = [1, 1]) {// 换行可删
    return s[0] === '0' ? 0 : (Array.from(s).reduce((p, v, _, a) => (p = Number(p + v), dp = [dp[1], (
             p === 0 || p > 26 && v === '0' ? (a.splice(1), 0) :
             p < 10  || p > 26 ? dp[1] : 
             p === 10 || p === 20 ? dp[0] : dp[0] + dp[1]
           )], v)), dp[1])
};


// 参考：https://leetcode-cn.com/problems/decode-ways/solution/dong-tai-gui-hua-1xing-dai-ma-chao-97-by-mantoufan/
