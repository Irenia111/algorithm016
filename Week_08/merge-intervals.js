/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // 这个只需要将全部的重叠区间合并
    // 先根据区间的开头进行排序
    intervals.sort((a, b) => a[0] - b[0])
    let n = intervals.length
    let res = []
    for (let i = 0; i < n; i++) {
        if (i === 0 || intervals[i][0] > res[res.length - 1][1] ) {
            res.push(intervals[i])
        } else if (intervals[i][0] <= res[res.length - 1][1] ) {
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1])
        }
    }
    return res
};