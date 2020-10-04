/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    // 这个好像岛屿数量啊啊啊
    let row = click[0]
    let col = click[1]
    if (board[row][col] === 'M') {
        board[row][col] = 'X'
        return board
    } 
        
        /* 如果一个没有相邻地雷的空方块（'E'）被挖出，修改它为（'B'），并且所有和其相邻的未挖出方块都应该被递归地揭露。
         * 这个诉求和岛屿数量一样
         * 先做一个要递归两边的
         */
        dfs(row, col)

        /* 如果一个至少与一个地雷相邻的空方块（'E'）被挖出，修改它为数字（'1'到'8'），表示相邻地雷的数量。
         * 我觉得要先确定地雷的数量和坐标。然后修改数字
         * 现在空方块都是
         */

    function dfs (i, j) {
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] !== 'E')return
        let dir = [[1, 1], [1, 0], [0, 1], [-1, -1], [-1, 0], [0, -1], [1, -1], [-1, 1]]
        // 统计点击位置周边的地雷个数
        let sum = 0
        for (let k = 0; k < 8; k++) {
            let x = i + dir[k][0]
            let y = j + dir[k][1]
            if (x >= 0 && x < board.length && y >= 0 && y < board[0].length && board[x][y] == 'M') {
                sum++
            }
        }
        /* 地雷个数为0, 标记为B, 递归处理周边元素 */
        /*     个数非0, 标记为''+sum           */
        if (sum === 0) {
            board[i][j] = 'B'
            for (let k = 0; k < 8; k++) {
                let x = i + dir[k][0] 
                let y = j + dir[k][1]
                dfs(x, y)
            }
        } else {
            board[i][j] = '' + sum
        }
    }

    return board
};