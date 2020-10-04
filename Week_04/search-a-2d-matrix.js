/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // 如果当前子数组内包含target的范围，就在子数组内寻找
    // 或者把二维数组拍平
    let n = matrix.length
    if (!n) return false
    let m = matrix[0].length
    if (target < matrix[0][0] || target > matrix[n - 1][m - 1]) return false
    let l = 0, r = n * m - 1
    while (l <= r) {
        let mid = parseInt((r + l) / 2)
        if (matrix[parseInt(mid/m)][mid % m] === target) return true

        if (matrix[parseInt(mid/m)][mid % m] < target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return false
};