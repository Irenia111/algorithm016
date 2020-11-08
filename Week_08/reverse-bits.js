/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    // 好想转换成，字符串，然后再颠倒啊啊啊啊啊

    // 整数翻转那道题，采用的是10位取数
    let result = 0;
    for(let i = 0;i < 32;i++){
        // 每次result左移一位，将n的最后一位补上
        result = (result << 1) + (n & 1);
        n >>= 1;
    }
    // result >>> 0; 
    // https://leetcode-cn.com/problems/reverse-bits/solution/190-dian-dao-er-jin-zhi-wei-by-alexer-660/
    return result >>> 0
};