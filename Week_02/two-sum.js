/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
    let hash = {}
    let final = []
    // 1. 构成hash，注意 3 + 3 = 6， 由于数组中元素会重复出现，所以拿数组存储
    nums.forEach((item, index) => {
        if (hash[item]) {
            hash[item].push(index)
        } else {
            hash[item] = [index]
        }
        
    })
    for (let item in hash) {
        if (hash[target - item]) {
            // 如果目标对象的数组大于 1，说明当前是 3 + 3 = 6 的情况
            if (hash[target - item].length === 1) {
                final = [hash[item][0], hash[target - item][0]]
            } else {
                // 3 + 3 = 6
                final = [hash[item][0], hash[target - item][1]]
            }
            
            break
        }
    }
    
    return final
 };

 
// 一遍hash，存储的不是每个元素的key，而是元素与target间的差值
var twoSum2 = function(nums, target) {
    // 存储出现过的数字，和对应的索引
    const prevNums = {}                      
    
    for (let i = 0; i < nums.length; i++) { 
        // 遍历元素   
        const curNum = nums[i]         
        // 当前元素   
        const targetNum = target - curNum    
        // 满足要求的目标元素   
        const targetNumIndex = prevNums[targetNum] 
        // 在prevNums中获取目标元素的索引
        if (targetNumIndex !== undefined) { 
            // 如果存在，直接返回 [目标元素的索引,当前索引]
          return [targetNumIndex, i]
        } else {                   
            // 如果不存在，说明之前没出现过目标元素
            // 存入当前的元素和对应的索引
          prevNums[curNum] = i    
        }
      }

}