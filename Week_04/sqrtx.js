/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // 这个可以拿二分查找写，最好是拿牛叠

    if (x === 0 || x === 1) return x
    let l = 0, r = x, ans = -1

    while (l <= r) {
        let mid = parseInt((r - l) / 2) + l
        if(mid * mid > x) {
            r = mid - 1
        } else {
            ans = mid
            l = mid + 1
        }
    }
    return ans
};