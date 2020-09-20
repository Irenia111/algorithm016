/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 使用暴力hash, map用起来有点麻烦，所以自己开了hash
    let hash = {}
    strs.forEach((item, index) => {
        let arr = item.split('').sort().toString()
        if(hash[arr]){
            hash[arr].push(item)
        } else {
            hash[arr] = [item]
        }
    })
    
    return Object.values(hash)
};


// 还有什么解法么？ 这个和78题有点像 https://leetcode-cn.com/problems/subsets/