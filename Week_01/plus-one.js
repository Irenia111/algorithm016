/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // 遍历一次，逐一修改数字
    // 进位
    for (let i=digits.length-1; i>=0; i--) {
        digits[i] += 1
        if (digits[i] % 10 !== 0) { 
            // 如果无进位，则跳出循环
            break 
        } else { 
            // 如果有进位，则将当前值置0，下一个继续+1
            digits[i] = 0 
        }
    }
    //如果第一个元素为0，则说明越界了
    if(digits[0] === 0) digits.unshift(1)
    
    return digits
};
/* 转化成数字+1，不可取，因为超过了int的大小
// 得到digits数组转化的数字
    let num = 0
    for (let i=0; i<digits.length; i++) {
        num = num*10 + digits[i]
    }

    num += 1
    
    //num拆回数字 
    let result = []
    let char
    i = 1
    while (num >= 1) {
        char = num % 10
        result.unshift(char)
        // 这里的处理导致了进位
        num = (num-char) / 10
    }
*/