/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let step = 0
    let length = nums.length
    let end = 0
    let max = 0
    for (let i = 0; i < length - 1; i++) {
        max = Math.max(max, i + nums[i])
        if (i === end) {
            // 当前位置已经跳到最大可跳位置，需要再跳一次
            step++
            end = max
        }
    }
    
    return step
    
};