/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    /* 存储字符的次数，然后对比
        遍历一遍s 构成hash
        hushmap和t
    */
        if (s.length !== t.length) return false
        let sArray = s.split('')
        let tArray = t.split('')
        let result = true
        let hash = {}
        for ( let i = 0; i < s.length; i++) {
            if (hash[sArray[i]]) {hash[sArray[i]]++} else {hash[sArray[i]]=1}
            if (hash[tArray[i]]) {hash[tArray[i]]-- } else {hash[tArray[i]]=-1}
        }
        for (let i = 0; i < s.length; i++) {
            if (hash[sArray[i]] !== 0) { 
                result = false
                break
            }
        }
    
        return result
    };