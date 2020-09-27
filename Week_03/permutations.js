/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let n = nums.length
    let result = []
    function combine (rest, index, n, arr) {
        if (rest === 0) {
            result.push(arr.slice())
            return
        }

        for (let i = 0; i < n; i++) {
            // 因为初始是空数组，所以什么都可以推入
            if (arr.indexOf(nums[i]) < 0) {
                arr[index] = nums[i]
                combine(rest - 1, index + 1, n, arr.slice())
            }
        }
    }
    combine(n, 0, n, []) 
    return result
};