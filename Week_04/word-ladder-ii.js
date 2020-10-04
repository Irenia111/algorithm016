/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    // https://leetcode-cn.com/problems/word-ladder-ii/solution/yan-du-you-xian-bian-li-shuang-xiang-yan-du-you--2/
    // https://leetcode-cn.com/problems/word-ladder-ii/solution/ru-guo-ni-fa-xian-kan-bie-ren-de-ti-jie-kan-bu-don/
    // 这个是记录一下每次的转换状态
    let chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let hash = new Set(wordList)
    if (!hash.has(endWord)) return []

    const levelMap = new Map();           // 存放图中的单词所在的层
    const wordMap = new Map();            // 存放图中的单词的邻接单词

    let visited = new Set()
    let queue = []
    visited.add(beginWord)
    queue.push(beginWord)

    let finished = false            // 是否存在变化到终点词的路径
    let level = 0             
    levelMap.set(beginWord, 0)      // 起始词的level为0


    let flag
    
    while (queue.length > 0) {
        let length = queue.length
        level++
        
        for (let k = 0; k < length; k++) {
            let cur = queue.shift()
            for (let i = 0; i < cur.length; i++) {
                for( let j = 0; j <= 26; j++) {
                    let str = cur.slice(0, i) + chars[j] + cur.slice(i + 1)
                    if (hash.has(str)) {

                        if (wordMap.has(str)) {
                            // 已经存在于wordMap 对应的数组推入出列的单词
                            wordMap.get(str).push(cur)
                        } else {
                            // 若不存在，则初始化一个数组 并放入“父单词”
                            wordMap.set(str, [cur])
                        }     

                        if (!visited.has(str)) {
                            if (str === endWord)finished = true
                            levelMap.set(str, level)       // 记录这个单词的level
                            visited.add(str)
                            queue.push(str)
                        }
                    }
                }
            }
        }
    }
    if (!finished) return [] // 无法到达终点词，返回[]

    const res = [];
    const dfs = (path, beginWord, word) => {
        if (word === beginWord) {
            // 将当前路径推入res数组，加上起始词          
            res.push([beginWord, ...path]) 
            return                        
        }
        // 将当前单词加入到path数组的开头
        path.unshift(word)        
        if (wordMap.get(word)) {
            // 当前单词有对应的“父单词”们   
            for (const parent of wordMap.get(word)) { 
                // 遍历“父单词”们
                // 如果层数相差一层，可以进一步递归
                if (levelMap.get(parent) + 1 === levelMap.get(word)) { 
                    dfs(path, beginWord, parent)                       
                }
            }
        }
        // 回溯，撤销选择，将path数组开头的单词弹出
        path.shift() 
    }
    dfs([], beginWord, endWord); // dfs的入口

    return res
};