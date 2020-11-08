/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    // 暴力解法： 开辟一个新的数组，遍历arr2 arr1
    let res = []
    arr1.sort((a, b) => a - b)
    for (let i = 0; i < arr2.length; i++) {
        for (let p = 0; p < arr1.length; p++) {
            if (arr1[p] === arr2[i]) {
                // let item = arr1.splice(p, 1)
                // res.push(item)
                res.push(arr1[p])
            }
        }
        // res.push(arr2[i])
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) < 0)res.push(arr1[i])
    }

    return res
};