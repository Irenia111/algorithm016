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
    let visited = new Set()
    let queue = []
    queue.unshift(beginWord)
    while (queue.length > 0) {
        let length = queue.length 
        while (length > 0) {
            let cur = queue.shift()
            for (let i = 0; i < cur.length; i++) {
                for (let k = 0; k < 26; k++) {
                    if (chars[k] === cur.charAt(i)) continue
                    let str = cur.slice(0,i) + chars[k] + cur.slice(i + 1)
                    if ( hash.has(str)) {
                        if (str === endWord) return step + 1
                        if (!visited.has(str)) {
                            visited.add(str)
                            queue.push(str)
                        }

                    }
                }
            }
            length--
        }
        step++
    }
    
    return 0
};