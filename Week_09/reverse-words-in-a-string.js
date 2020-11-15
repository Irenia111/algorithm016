/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // 这个和剑指offer差不多
    // 好奇C的 O(1)
    // 拿’ ‘做分割，所以之前为’ ‘的元素是’‘字符串
    let arry = s.split(' ')
    arry = arry.filter(item => item !== '')
    let j = arry.length - 1
    for (let i = 0; i <= j; i++) {
        let tmp = arry[i]
        arry[i] = arry[j]
        arry[j] = tmp
        j--
    }
    return arry.join(' ')
};