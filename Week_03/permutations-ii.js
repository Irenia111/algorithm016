/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    // 这个的剪枝需要想想
    let result = []
    // 先把原始数组排序，这样相同的数字会在一起
    nums.sort((a,b) => a - b)
    function combine (rest, index, preIndex, length, arr) {
        if(rest === 0) {
            result.push(arr.slice())
            return
        }
        // 每次相同的数字只能出现一次
        for (let i = 0; i < length; i++) {
            if (index === 0 || preIndex.indexOf(i) < 0) {
                arr[index] = nums[i]
                // 标记访问过的数组元素
                preIndex.push(i)
                // 跳过重复元素
                while(nums[i] === nums[ i + 1 ]) i++
                combine(rest - 1, index + 1, preIndex, length, arr.slice())
                //将标记删除
                preIndex.pop()
            } 
        }
    }
    combine(nums.length, 0, [], nums.length, [])
    return result

};