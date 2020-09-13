/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    /* 盛水最多的容器 --> 柱状图中最大的矩形 --> 接雨水
     * 最短的边决定高度，空的位置决定深度，最高的边决定长度
     * 计算每个位置的盛水量 当前位置的乘水量等于周边第二高的位置，以及自身的高度
     * i位置的盛水量，两边有比i高的元素  感觉也可以用单调栈！不可以单调栈，因为看的不是最高，而是第二高
     * 首 尾 的两个元素都不能盛水
     */
     let n = height.length
     let ans = 0
     let r_max = [], l_max = []
     r_max[n-1] = height[n-1]
     l_max[0] = height[0]
     // 初始化左边最大值数组和右边最大值数组
     for (let i = 1; i < n; i++) {
         l_max[i] = Math.max(height[i], l_max[i-1])
         r_max[n-i-1] = Math.max(height[n-i-1], r_max[n-i])
     }
 
     for (let i = 1; i < n-1; i++ ) {
         ans += Math.min(l_max[i], r_max[i]) - height[i]
     }
     // 双指针法，待实现
 
     return ans
 };