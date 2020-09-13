/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 1) return
    // 从末端开始移动指针
    let end = nums.length - 1
    // 一个在末尾，一个在前方找
    let i = nums.length - 1
    let j = i - 1
    let length = nums.length
    while (i >= 0) {
        if (nums[j] !== nums[i]) {
            // 当两元素不相等时，指针一起前移
            i--
            j--
        } else {
            // 当元素相等时，j找到重复元素的头部，i指在重复元素的尾部
            while (nums[i] === nums[j]) {j--}
            // 如果第一个元素和第二个重复，那么就要将覆盖的循环从第一个元素开始
            let flag = j=== -1 ? 0 : j+1
            // 长度减去重复元素的数量
            length = length - ( i - j ) + 1
            // 覆盖重复元素
            for (let n = i; n < end+1; n++) {
                nums[flag] = nums[n]
                flag++
            }
            // end 指向数组末尾
            end = length
            // i 移到 j 元素前一个位置
            i = j
            j = i-1
        }
    }
    return length
};