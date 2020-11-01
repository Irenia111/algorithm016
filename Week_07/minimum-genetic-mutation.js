/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    // https://leetcode-cn.com/problems/minimum-genetic-mutation/solution/433-zui-xiao-ji-yin-bian-hua-by-alexer-660/
    
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
            if (cur === end) return step
            for (let i = 0; i < cur.length; i++) {
                for (let j = 0; j < 4; j++) {
                    let str = cur.slice(0, i) + fourCharts[j] + cur.slice(i + 1)
                    // if (str === end) return step + 1
                    if (hash.has(str)) {
                        stack.push(str)
                        hash.delete(str)
                    }
                }
            }
            length--
        }
        step++
    }
    return -1
};
