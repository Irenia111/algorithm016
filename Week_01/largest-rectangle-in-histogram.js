/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // 盛水最多的容器 --> 柱状图中最大的矩形 --> 接雨水
    // 这个和接雨水好像啊

    // 单调栈 -> labuladong的单调栈
    /**
     * 换句话说，我们需要找到左右两侧最近的高度小于 h 的柱子，这样这两根柱子之间（不包括其本身）的所有柱子高度均不小于 h，并且就是 i 能够扩展到的最远范围。
     * 
     * 首先，要想找到第 i 位置最大面积是什么？
     * 是以i 为中心，向左找第一个小于 heights[i] 的位置 left_i；
     * 向右找第一个小于于 heights[i] 的位置 right_i，即最大面积为 heights[i] * (right_i - left_i -1)
     * 
     * 这个是 “每日温度” 的升级
     */
     
    /* 
     * 相当于维护两个单调栈，当前直方图位置左边的，当前位置右边的

     * 只算一边的单调栈  不能包含全部的情况，所以不可以用
    */
    let n = heights.length
    if (n === 1) return heights[0]
    
    // 单调栈
    let r_s = [], r_index = []
    let l_s = [], l_index = []

    let max = 0
    // 还是要维护两个 一个右， 一个左
    for (let i = n-1 ; i >= 0; i--) {
        // 构造 stack 压栈元素为右侧更小
        while (r_s.length && heights[r_s[r_s.length - 1]] >= heights[i]) {
            // 栈顶元素对应的height要比height[i]大
            r_s.pop()
        }
        // 这个index要注意 如果右侧没有最小值，说明当前高度为面积限度，所以index记录为数组尾 n
        r_index[i] = r_s.length > 0 ? r_s[r_s.length - 1]: n

        r_s.push(i)
    }

    for (let i = 0 ; i < n; i++) {
        // 构造 stack 压栈元素为左侧更小
        while (l_s.length && heights[l_s[l_s.length - 1]] >= heights[i]) {
            // 栈顶元素对应的height要比height[i]大
            l_s.pop()
        }
        // 这个index要注意 如果左侧没有最小值，说明当前高度为面积限度，所以index记录为-1
        l_index[i] = l_s.length > 0 ? l_s[l_s.length - 1]: -1

        l_s.push(i)
    }

     for (i = 0; i < n; i++) {
        let tmp = heights[i] * (r_index[i] - l_index[i] - 1)
        max = tmp >= max ? tmp : max
    }
    return max
};