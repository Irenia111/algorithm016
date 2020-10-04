/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // 这个要嵌套循环啊，有点麻烦
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    
    let ans = 0
    // 只刚刚好满足每一个孩子的需要
    for (let i = 0; i < g.length; i++) {
        let find = false
        for (let j = 0; j < s.length; j++) {
            if (g[i] <= s[j] && !find) {
                ans++
                s.splice(j, 1)
                find = true
            }
        }
    }

    return ans
};