/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/* 
0. 暴力求解，三层嵌套 O(N^3)
    
1. 升级版的两数之和，将数组排序，之后采用三指针
    指针只能从三重循环成为两重循环！！！
    错误：头和尾加和，然后在中间进行查找
    正确：一个对象从头遍历到位，在它之后限定的位置，设置头尾两指针
        错误：（这样似乎也不会有重复值）依旧需要判断去重
        正确：去重方法 为啥一直超时啊！！！！

    如果nums[i] + nums[left] + nums[right] > 0 就说明 此时三数之和大了，因为数组是排序后了，所以right下表就应该想左移动，这样才能让三数之和小一些。
    如果nums[i] + nums[left] + nums[right] < 0 说明 此时 三数之和小了， left 就向右移动，才能让三数之和大一些，直到left与right相遇为止。
*/    

var threeSum = function(nums) {
    const result = []
    let pre = []
    nums.sort((a, b) =>  a - b )
    // 如果排序后最小的元素非负，那么是不可能合为0的
    if(nums[0] > 0 || nums.length < 3 || (nums[0] === 0 && nums[1] > 0)) return result
    // 输入数组全为0
    if(nums[0] === 0 && nums[nums.length - 1] === 0) return [[0, 0, 0]]
    
    for (let i = 0; i < nums.length - 2; i++) {
        let n1 = nums[i]
        // 跳过n1和上一个元素相同的情况
        if (i != 0 && n1 === nums[i - 1]) continue;

        let left = i + 1
        let right = nums.length - 1
        
        while(left < right){
            let n2 = nums[left]
            let n3 = nums[right]
            if (n1 + n2 + n3 === 0) {
                result.push([n1, n2, n3])
                // 去掉重复的left 和 right
                while (left < right && nums[left] == n2) left++
                while (left < right && nums[right] == n3) right--
            } else if (n1 + n2 + n3 > 0) {
                // 大于零，则左移右指针
                right--
            } else {
                left++
            }
        }
    }
    return result
};