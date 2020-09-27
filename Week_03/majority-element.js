/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // 这个要遍历一遍
    // 先排序，之后用二分查找
    /* 这个不合适，因为数组可能特别特别长
    排序思路

    既然数组中有出现次数> ⌊ n/2 ⌋的元素，那排好序之后的数组中，相同元素总是相邻的。
    即存在长度> ⌊ n/2 ⌋的一长串 由相同元素构成的连续子数组。
    举个例子：
    无论是1 1 1 2 3，0 1 1 1 2还是-1 0 1 1 1，数组中间的元素总是“多数元素”，毕竟它长度> ⌊ n/2 ⌋。
    */
    // 计算具体的频数
    function count (target, start, end, nums) {
        let count = 0
        for (let i = start; i <= end; i++) {
            if (nums[i] === target) {
                count++
            }
        }
        return count
    }
    function find (start, end, nums) {
        // 如果数组中只有一个元素，那么该元素就是众数
        if (start === end) return nums[start]

        // 将数组分为两半
        let mid = parseInt((end - start) / 2) + start
        // 获得左侧数组的众数
        let left = find(start, mid, nums)
        // 获得右侧数组的众数
        let right = find(mid + 1, end, nums)

        // 大于半数的元素，意味着在左边和右边，元素相同
        if (left === right) return left

        // 如果不相同，那么就要重新迭代，比较左边和右边众数的频数
        let leftCount = count(left, start, end, nums)
        let rightCount = count(right, start, end, nums)
        return leftCount > rightCount ? left : right
    }

    return find(0, nums.length - 1, nums)
};