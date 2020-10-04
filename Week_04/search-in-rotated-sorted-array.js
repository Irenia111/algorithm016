/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n = nums.length
    if (!n) return -1
    
    if (n == 1) return nums[0] == target ? 0 : -1;
    
    let l = 0, r = n - 1
    
    while (l <= r) {
        let mid = parseInt((r + l) / 2)
        if (target === nums[mid]) return mid

        // 0至mid为升序
        if (nums[0] <= nums[mid]) {
            if (nums[0] <= target && target < nums[mid]) {
                // target 在 0 - mid 区间内
                r = mid - 1
            } else {
                // target在 mid - l 的区间内
                l = mid + 1
            }
        } else {
            // 0至mid不为升序，那么升序是 mid - n
            if (nums[mid] < target && target <= nums[n - 1]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
    }
    return -1

};