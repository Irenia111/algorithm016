/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // 每次都取出数字最后一个1，直到数字为0
    let count = 0
    while (n != 0) {
        n = n & (n - 1)
        count++
    }
    /*
    这个 测试样例过不了
    11111111111111111111111111111101
    输出： 1
    预期结果：31
    while (n > 0) {
        n = n & (n - 1)
        count++
    }
    */
    return count
    
};