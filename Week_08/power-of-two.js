/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // 如果是2的幂次方，说明在数字的二进制表达中，只有一个1
    /*
    // 过不了这个测试样例 -2147483648
    let res = 0
    while (n != 0) {
        res++
        n = n & (n - 1)
    }
    return res === 1
    */

    return n <= 0 ? false : (n & (n - 1)) === 0 ? true : false
};