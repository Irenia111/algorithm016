// 迭代
var subsets1 = function(nums) {
    let res = [[]]
    //这个题蛮有意思的，可以直接从后遍历，遇到一个数就把所有子集加上该数组成新的子集，遍历完毕即是所有子集
    for(let i=0;i<nums.length;i++){
        res.forEach(e=>{
            res.push(e.concat(nums[i]))
        })
    }
    return res
}
// 递归
var subsets2 = function(nums) {
    let res = []
    function dfs (index, arr) {
        if(index > nums.length){
            return
        }
        res.push(arr.slice(0))
        for (let i = index; i < nums.length; i++) {
            arr.push(nums[i])
            dfs(i + 1, arr)
            arr.pop()
        }
    }
    dfs(0, [])
    return res
}