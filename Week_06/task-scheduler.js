/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

var leastInterval = function(tasks, n) {
    let arr = [],
        normalArr = [],
        mostTaskNum = 0;
    
    // 初始化长度为 26 的数组，key 是 'A' - 'Z'
    for (let i = 65; i <= 90; i++) {
      let key = String.fromCharCode( i );
      arr[key] = 0;
    }
    
    // 统计每个任务出现的次数
    for (let i = 0; i < tasks.length; i++) {
      arr[ tasks[i] ] ++;
    }
    
    for (let i = 65; i <= 90; i++) {
      let key = String.fromCharCode( i );
      normalArr.push( arr[key] );
    }
    
    normalArr.sort((a, b) => b - a);
    
    // 统计出现次数最多的任务，以及一共有几个并列出现次数最多的任务
    for (let key in normalArr) {
      if (normalArr[key - 1] !== undefined && normalArr[key] !== normalArr[key - 1]) break;
      mostTaskNum++;
    }
    
    const count = (normalArr[0] - 1) * (n + 1) + mostTaskNum,
          len = tasks.length;
    
    return count < len ? len : count;
  };
  

// 参考链接：https://leetcode-cn.com/problems/task-scheduler/solution/js-gao-yi-gao-mei-kan-da-lao-de-ti-jie-du-mei-nong/
