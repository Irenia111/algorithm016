/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    // 一开始要5，这样就有钱给之后的人找
    if (bills[0] > 5) return false
    // 感觉这里没有用到贪心

    let five = 0
    let ten = 0
    let flag = true
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            five++
        } else if (bills[i] === 10) {
            if(five <= 0) {
                flag = false
                break
            }
            five--
            ten++
        } else if (bills[i] === 20) {
            if(five < 1 || ( five < 3 && ten < 1) ) {
                flag = false
                break
            }
            if(ten > 0) {
                ten--
                five--
            } else {
                five -= 3
            }
        }

    }
    return flag
};