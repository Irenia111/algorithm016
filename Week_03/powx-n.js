/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0 || x === 1) return 1
 
    if (n === 1) return x
 
     let base = x
     // 如果是负次幂
     if (n < 0) {
         base = parseFloat(1 / x)
         n = -n
     }
     if (n % 2 === 1) {
         n--
         return base * myPow(base, n)
     } else {
         return myPow(base * base, n / 2)
     }
     
 
 };