/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // 维护当前可跳的最大值，如果最大值大于长度，那么就可以到达
    let length = nums.length
    if (!length || (length > 1 && nums[0] === 0)) return false
    if (length === 1) return true
    let max = 0
    for (let i = 0; i < length - 1; i++) {
        // 如果不能跳过0，那么就不继续查找
        if(nums[i] === 0 && max <= i)  break
        
        max = Math.max(max, (i + nums[i]))
        if (max >= length - 1) return true
        
        
    }
    return false
};