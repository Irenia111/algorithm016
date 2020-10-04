/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    // https://leetcode-cn.com/problems/walking-robot-simulation/solution/tu-jie-mo-ni-xing-zou-ji-qi-ren-by-dekeshile/
    // https://leetcode-cn.com/problems/walking-robot-simulation/solution/874-mo-ni-xing-zou-ji-qi-ren-by-alexer-660/
    // 机器人一直朝北走，相当于一直沿着y轴
    let dx = [0, 1, 0, -1]
    let dy = [1, 0, -1, 0]
    let x = 0, y = 0, dir = 0
    let ans = 0
    let hash = {}
    for (let i = 0; i < obstacles.length; i++) {
        hash[obstacles[i][0] + '-' + obstacles[i][1]] = true
    }
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === -2) {
            // [0, 0] 向左转 [-1, 0] -> [0, -1] -> [1, 0] -> [0, 0]
            dir = (dir + 3) % 4
        } else if (commands[i] === -1) {
            // [0, 0] 向右转 [1, 0] -> [0, -1] -> [-1, 0] -> [0, 0]
            dir = (dir + 1) % 4
        } else {
            // 每一步都需要检查是否有障碍物，会停在障碍物前一个位置，继续之后的命令
            for (let k = 0; k < commands[i]; k++) {
                //试图走出一步，并判断是否遇到了障碍物，
                    let nx = x + dx[dir]
                    let ny = y + dy[dir]
                    //当前坐标不是障碍点，计算并与存储的最大欧式距离的平方做比较
                    if (hash[nx + '-' + ny]) {
                        //是障碍点，被挡住了，停留，只能等待下一个指令，那可以跳出当前指令了
                        break
                    } else {
                        x = nx
                        y = ny
                        ans = Math.max(ans, x*x + y*y)
                    }
            }
        }
    } 
    return ans
};