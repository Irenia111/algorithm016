/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
    function dfs (left, right, length, str) {
        if (left === length && right === length) {
            res.push(str)
            return
        }
        if (left < length) {
            dfs(left + 1, right, length, str + "(")
        }
        if (left > right && right < length) {
            dfs(left, right + 1, length, str + ")")
        }

    }
    dfs(0, 0, n, "")
    return res
};