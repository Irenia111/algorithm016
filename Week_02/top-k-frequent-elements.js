/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if ( k === 1 && nums.length === 1) return nums
    // 暴力解法 先排序再去重
    // 使用 栈 或者 队列 （滑动窗口）
    // 1. 先汇总出一个频率数组
    let frequentMap = {}

    for (let i = 0; i < nums.length; i++) {
        if (!frequentMap[nums[i]]) {
            frequentMap[nums[i]] = 1
        } else {
            frequentMap[nums[i]]++
        }
    }

    let ans = []
    let keys = Object.keys(frequentMap)

    if(k === keys.length) {
        
        for (let item in frequentMap) {
            ans.push(item)
        }   
        return ans
    }

    let heap = []
    // 2. 得到频率数组
    for (let i = 0; i < keys.length; i++) {
        
        // 建堆
        // 这里偷懒，直接拿数组api代替
        if (i < k) {
            heap.push(frequentMap[keys[i]])
        }
        if (i === k - 1)heap.sort((a,b) => a - b)

        if ( i >= k ) {
            if (frequentMap[keys[i]] < heap[0]) {
                continue
            } else if (frequentMap[keys[i]] >= heap[0]) {
                heap[0] = frequentMap[keys[i]] 
                heap.sort((a,b) => a - b)
            }
        }

    }
    // 3. 得到对应的数字
    for (let i = 0; i < k; i++) {
        for (let item in frequentMap) {
            if (frequentMap[item] === heap[i]) {
                ans.push(item)
                delete frequentMap[item]
                break
            }
        }   
    }

    return ans

};