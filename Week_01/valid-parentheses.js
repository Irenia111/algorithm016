/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    // 如果字符串只有一个，肯定不对；字符串以右括号开始，也不是正确的
    if(s.length === 1 || ')}]'.indexOf(s[0]) >= 0) return false
    // 使用栈，遇到左括号压栈，遇到右括号弹出栈顶元素，如果不匹配，则返回false
    let stack = []
    // 将结果值初始为true
    let result = true
    let str = s.split('')
    for ( let i = 0; i < str.length; i++) {
        if ('({['.indexOf(str[i]) >= 0){
            stack.push(str[i])
        } else if (')}]'.indexOf(str[i]) >= 0) {
            if ((str[i] === ')' && stack[stack.length - 1] === '(') 
            || (str[i] === '}' && stack[stack.length - 1] === '{')
            || (str[i] === ']' && stack[stack.length - 1] === '[')
            ) {
                stack.pop()
            } else {
                // 如果右括号和栈顶不匹配，返回false
                result = false
                break
            }
        } 
    }

    // 栈非空，则说明有左括号未匹配，返回false
    result = stack.length > 0 ? false : result 

    return result
}