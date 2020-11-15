/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    // 这个好像翻转链表啊，拿两个指针
    // 翻转是两两一对

    let count = Math.floor(s.length / (k * 2))
    let rest = s.length % (k * 2)
    let arr = s.split('')
    let p0 = 0, p1 = k
    // 在每个 2k 区间里翻转
    for (let i = 0; i < count; i++) {
        reverse(arr, p0, p1 - 1)
        p0 += 2 * k, p1 += 2 * k
    }
    // 翻转最后剩下的
    if (rest > 0 && rest <= k) {
        result = reverse(arr, s.length - rest, s.length - 1)
    } else if (rest > k && rest < 2 * k) {
        result = reverse(arr, s.length - rest, s.length - rest - 1 + k)
    }


    function reverse (arr, index1, index2) {
        while (index1 < index2) {
            let tmp = arr[index1]
            arr[index1] = arr[index2]
            arr[index2] = tmp
            index2--, index1++
        }
    }

    function copy (res, start, end) {
        while (start <= end) {
            res += s.charAt(start)
            start++
        }
    }
    return arr.join('')
};