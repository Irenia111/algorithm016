/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = []
    if ( k === 1) {
        for (let i = 1; i <= n; i++) {
            result.push([i])
        }
        return result
    }
    function generate (start, rest, length, arr) {
        if (rest === 0) {
            result.push(arr.slice())
            return
        }
        
       for (let i = start; i <= n; i++) {
            if (arr.indexOf(i) < 0) {
                arr[k - rest] = i
                generate(i + 1, rest - 1, length, arr.slice())
            } 
        }
        
    }
    generate(1, k, n, [])

    return result
};