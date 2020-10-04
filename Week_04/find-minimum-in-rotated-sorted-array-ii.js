/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // 我觉得按照旋转的定义，肯定是最小的点是旋转起点啊
    // 那么需要判断是否旋转么？ --》 有旋转的地方，意味着连续递增断了
    let l = 0, r = nums.length - 1
    /* 求旋转数组的最大值
    while (l < r) {
        let mid = parseInt((r + l) / 2)
        if (nums[l] < nums[mid]) {
            l = mid
        } else if (nums[l] > nums[mid]) {
            r = mid + 1
        } else {
            l += 1
        }
    }
    return nums[r]
    */
    while (l < r) {
        let mid = parseInt((r + l) / 2)
        if (nums[mid] < nums[r]) {
            r = mid
        } else if (nums[mid] > nums[r]) {
            l = mid + 1
        } else {
            r -= 1
        }
    }
    return nums[l]

};