/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length < 1 ) return 0
    let count = 0
    let row = grid.length
    let col = grid[0].length
    function dfs (i, j) {
        if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] != '1')return
        grid[i][j] = '2'
        dfs(i + 1, j)
        dfs(i - 1, j)
        dfs(i, j + 1)
        dfs(i, j - 1)
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === '1') {
                count++
                dfs(i, j)
            }
        }
    }
    
    
    return count
};
