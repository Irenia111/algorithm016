/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 1.暴力求解，嵌套循环
var twoSum1 = function(nums, target) {
    let result
    for (let i = 0; i < nums.length -1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) { 
                result = [i, j]
                break
            }
        }
    }
    return result
}
/**
 * 2. 双指针
 * 先把数组排序，start、end表示数组下标为0、数组最后一个值的下标。
 * 如果nums[start] + nums[end] > target，说明end需要减一；如果nums[start]+ nums[end]<target,说明start需要加1；如果相等则是我们想要的。
 * 找到start、end后，再遍历一遍数组，找到对应的结果即可
 */

var twoSum2 = function(nums, target) {
    
    let copy = []
    nums.forEach((item) => {
        copy.push(item)
    })
    copy.sort((a, b) => {return a - b})
    
    let j = copy.length - 1
    let i = 0

    // result保存的是数字，之后要再查找数字对应的index
    let result = []
    for (let n = 0; n < copy.length; n++) {
        if (copy[i] + copy[j] > target) {
            j--
        } else if (copy[i] + copy[j] === target) {
            result[0] = copy[i]
            result[1] = copy[j]
        } else {
            i ++
        }
    }
    
    let final = []
    
    if (result[0] == null) {
        return
    } else {
        nums.forEach((item, index) => {
            if (item === result[0] || item === result[1]) {
                final.push(index)
            }
        })
    }
    
    return final
}
/**
 * 3. 哈希表法 ????
 * 建立hash会去除数组内的重复值
 */
