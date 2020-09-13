/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    for (let i = 0; i < k; i++) {
        nums.unshift(nums[nums.length - 1])
        nums.pop()
    }
};
// 探索其他解法
