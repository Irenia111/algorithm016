/**
 * @param {number} n
 * @return {number}
 */

// 1.暴力法，递归求解 超出时间限制
var climbStairs1 = function(n) {
    if (n === 1 || n === 2 || n === 3) {
        return n
    } else {
        return climbStairs1(n-1) + climbStairs1(n-2)
    }
};

// 2.动态规划，借助数组
var climbStairs2 = function(n) {
    if (n === 1 || n === 2 || n === 3) {
        return n
    } else {

        let result = []
        
        for ( let i = 0; i < n+1; i++) {
            if ( n <= 3) {
                result.push(i)
            } else {
                result.push(result[i-1] + result[i-2])
            }
        }

        return result[n]
    }   
};


// 3.改进版动态规划，只保留current
var climbStairs3 = function(n) {
    if (n <= 3) {
        return n
    } else {
        let pre = 2
        let current = 3
        let final = 0
    
        while ( n > 3 ) {
            final = current + pre
            pre = current
            current = final
            n--
        }
        return current
    }
};
