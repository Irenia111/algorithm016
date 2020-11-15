/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // 感觉是拿贪心解决的
    /* 拿动态规划试试吧 -->> 想不出
    dp[i] 的值代表 nums 前 iii 个数字的最长子序列长度

    */
    const n = nums.length 
    if (!n) return 0
    let dp = Array(n).fill(1)
    let res = 1
    // 第一个index的子串就是它自身
    dp[0] = 1
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        res = Math.max(res, dp[i])
    }

    return res
};