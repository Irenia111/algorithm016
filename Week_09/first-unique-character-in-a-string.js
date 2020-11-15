/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // 暴力法： 先计算字符出现次数 然后再确定index ---> 这个太慢了，还不如双循环
    let res = -1
    let hash = []
    for (let i = 0; i < s.length; i++) {
        // 字符左侧已查过的部分
        if (hash.indexOf(s.charAt(i)) >= 0) continue
        let flag = true
        for (let j = i + 1; j < s.length; j++) {
            if (s.charAt(j) === s.charAt(i)) {
                hash.push(s.charAt(i))
                flag = false
                // 找到第一个重复的字符，立即跳出
                break
            }
        }
        if (flag) {
            res = i
            break
        }
    }
    return res
};