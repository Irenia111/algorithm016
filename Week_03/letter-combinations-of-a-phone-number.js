/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits === '') return []
    let key = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
    ]

    let arr = digits.split('')
    let result = []
    function print (rest, index, list, arr) {
        if(rest === 0) {
            result.push(list)
            return
        }

        if(arr[index] == 0 || arr[index] == 1) {
            print(rest, index + 1, list, arr)
        } else {
            let keyList = key[arr[index] - 2]
            for(let i = 0; i < keyList.length; i++) {
                list = list + keyList[i]
                print(rest - 1, index + 1, list, arr)
                list = list.slice(0, -1)
            }
        }
    }
    print(arr.length, 0, '', arr)
    return result
};