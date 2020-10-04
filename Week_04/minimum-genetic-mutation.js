/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    // 应该是修改一次，查询一下bank
    // https://leetcode-cn.com/problems/minimum-genetic-mutation/solution/433-zui-xiao-ji-yin-bian-hua-by-alexer-660/
    
    // 在bank中删除start
    // 相当于边遍历，边建造一个图
    let fourCharts = ['A', 'C', 'G', 'T']
    let hash = new Set(bank)
    hash.delete(start)
    if (!hash.has(end)) return -1
    let stack = []
    stack.push(start)
    let step = 0
    while (stack.length > 0) {
        let length = stack.length
        while (length > 0) {
            let cur = stack.shift()
            if (cur === end) {
                return step
            } else {
                for (let j = 0; j < cur.length; j++) {
                    for (let i = 0; i < 4; i++) {
                        let str = cur.slice(0, j) + fourCharts[i] + cur.slice(j + 1)
                        if (hash.has(str)) {
                            stack.push(str)
                            hash.delete(str)
                        }
                    }
                }
                
            }
            length--
        }
        step++
    }
    
    return -1

};