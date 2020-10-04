/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let n = nums.length
    if (!n) return 
    if (n === 1) return nums[0]

    let l = 0, r = n - 1
    let min = Number.POSITIVE_INFINITY
    while (l < r) {
        let mid = parseInt((l + r)/2)
        if (nums[mid] < nums[r]) {
            r = mid
        } else {
            l = mid + 1
        }
    }

    return nums[l]
};