/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let step = 1
    let chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let hash = new Set(wordList)
    // hash.delete(endWord)
    let visited = new Set()
    visited.add(beginWord)
    let queue = []
    queue.push(beginWord)
    while (queue.length > 0) {
        let length = queue.length
        for (let k = 0; k < length; k++) {
            // ！！！从队头取
            let item = queue.shift()
            // if (item === endWord) return step 
            for (let i = 0; i < item.length; i++) {
                for (let j = 0; j < 26; j++) {
                    if (chars[j] === item.charAt(i)) continue
                    let str = item.slice(0, i) + chars[j] + item.slice(i + 1)
                    
                    if (hash.has(str)) {
                        if (str === endWord) return step + 1
                        if (!visited.has(str)) {
                            visited.add(str)
                            queue.push(str)
                        }
                    }
                }
            }
        }
        step++
    }

    return 0
};