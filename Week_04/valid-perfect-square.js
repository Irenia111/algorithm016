/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 0 || num === 1) return true
    let l = 0, r = num
    let ans
    while (l <= r) {
        let mid = l + parseInt((r - l) / 2)
        if (mid * mid > num) {
            r = mid - 1
        } else {
            // 因为只要整数部分，小于和等于的情况一起处理
            ans = mid
            l = mid + 1
        }
    }
    return ans * ans === num
};