/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    // 双指针，从两边逼近，如果有一个不一样，可以跳过，如果比一个多，那么就跳出
    const n = s.length
    if (!n) return false
    let p1 = 0, p2 = n - 1
    while (p1 < p2) {
        if (s.charAt(p1) === s.charAt(p2)) {
            p1++, p2--
        } else {
            const flag1 = isValid(p1 + 1, p2)
            const flag2 = isValid(p1, p2 - 1)
            if (flag1 || flag2) {
                return true
            } else {
                return false
            }
        }

    }
    function isValid (index1, index2) {
        while (index1 < index2) {
            if (s.charAt(index1) !== s.charAt(index2)) return false
            index1++
            index2--
        }
        return true
    }
    return true
};