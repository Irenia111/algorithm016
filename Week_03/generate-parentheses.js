/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // 比较蠢的办法：1.枚举所有的括号可能 2.保留有效括号
    // 所以采用，边生成边检查
    // 相当于在六个格子里填字符，左右括号数量要相等，
    let result = []

    function generate (leftNum, rightNum, length, string) {
        // 说明格子填满，将字符串压入结果
        if (length === 2 * n) {
            if (leftNum === rightNum) {
                result.push(string)
                return
            } else {
                return
            }
        }

        if(leftNum < n && leftNum >= rightNum){
            // 左括号不满n个，可以在字符后加入左括号
            // string = string + '(' 这样写会提前修改字符串
            // 进入下次递归
            generate(leftNum + 1, rightNum, length + 1, string + '(')
        } 
        if (leftNum <= n && leftNum > rightNum) {
            // 右括号只有在比左括号数额少时，才可以填入
            //string = string + ')'
            // 进入下次递归
            generate(leftNum, rightNum + 1, length + 1, string + ')')
        }

    }

    generate(0, 0, 0, "")

    return result

};