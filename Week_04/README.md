## DFS模板
### 递归实现
```js
//JavaScript
const visited = new Set()
const dfs = node => {
  if (visited.has(node)) return
  visited.add(node)
  dfs(node.left)
  dfs(node.right)
}
```
### 非递归实现
使用栈模拟压栈过程， 注意使用 visited 进行节点的标注
```Python
# Python
def DFS(self, tree): 

	if tree.root is None: 
		return [] 

	visited, stack = [], [tree.root]

	while stack: 
		node = stack.pop() 
		visited.add(node)

		process (node) 
		nodes = generate_related_nodes(node) 
		stack.push(nodes) 

	# other processing work 
	...
```
### 典型题目

https://leetcode-cn.com/problems/generate-parentheses/#/description

https://leetcode-cn.com/problems/number-of-islands/

https://leetcode-cn.com/problems/minesweeper/description/


## BFS模板
有点像DFS非递归的写法
```js
//JavaScript
const bfs = (root) => {
  let result = [], queue = [root]
  while (queue.length > 0) {
    let level = [], n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.pop()
      level.push(node.val) 
      if (node.left) queue.unshift(node.left)
      if (node.right) queue.unshift(node.right)
    }
    result.push(level)
  }
  return result
};
```

### 典型题目

#### 树的层序遍历相关

https://leetcode-cn.com/problems/binary-tree-level-order-traversal/#/description


https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/#/description

### 最小基因变化 单词接龙

https://leetcode-cn.com/problems/minimum-genetic-mutation/#/description

https://leetcode-cn.com/problems/word-ladder/description/

https://leetcode-cn.com/problems/word-ladder-ii/description/


## 二分查找模板

二分查找的使用场景：

1. 目标函数单调性（单调递增 & 递减）
2. 存在上下界（bounded）
3. 能够通过索引访问（index accessible）
   
```js
/* JavaScript */
let left = 0, right = len(array) - 1
while (left <= right) {
  let mid = (left + right) >> 1
  if (array[mid] === target) { /*find the target*/; return }
  else if (array[mid] < target) left = mid + 1
  else right = mid - 1
}

```
### 相关题目

https://leetcode-cn.com/problems/sqrtx/

https://leetcode-cn.com/problems/valid-perfect-square/

https://leetcode-cn.com/problems/search-a-2d-matrix/

https://leetcode-cn.com/problems/search-in-rotated-sorted-array/

https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/

使用二分查找，寻找一个半有序数组 [4, 5, 6, 7, 0, 1, 2] 中间无序的地方

假定为升序排列且无重复元素，可以理解为半有序数组中最小值的位置

```js
var findMin = function(nums) {
    let n = nums.length
    if (!n) return 
    if (n === 1) return nums[0]

    let l = 0, r = n - 1
    let min = Number.POSITIVE_INFINITY
    while (l < r) {
        let mid = parseInt((l + r)/2)
        if (nums[mid] < nums[r]) {
            r = mid
        } else {
            l = mid + 1
        } 
    }

    return nums[l]
};
```

完整版

```js
//找出最小元素所在下标，若下标不为0（即非有序数组），则该下标往后直至数组末尾都是无序
function findMin(nums) {
    //找最小元素下标
    let low = 0
    let high = nums.length - 1
    let min_num = nums[low]
    let min_index = low
    while (low <= high) {
        let mid = low + ((high - low) >> 1);
        if (nums[mid] > nums[low]) {
            //左半部分有序
            if (min_num < nums[low]) {
                min_index = low
                min_num = nums[low]
            }
            low = mid + 1
        } else if (nums[mid] < nums[low]) {
            //右半部分有序
            if (min_num < nums[mid]) {
                min_index = mid
                min_num = nums[mid]
            }
                high = mid - 1
        } else {
            //此时，只剩nums[low]和nums[high]未比较
            if (min_num < nums[low]) {
                min_index = low
                min_num = nums[low]
            }
            if (min_num < nums[high]) {
                min_index = high
                min_num = nums[high]
            }
            break
        }
    }
    return min_index
}

```

参考： https://blog.csdn.net/qq_33268394/article/details/105617500

## 贪心 & 动态规划
贪心可以快速解决动态规划的问题，但不是所有动态规划问题都可以通过贪心解决

### 贪心相关题目

https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/description/

https://leetcode-cn.com/problems/assign-cookies/description/

https://leetcode-cn.com/problems/jump-game/

https://leetcode-cn.com/problems/jump-game-ii/

### 动态规划相关题目

https://leetcode-cn.com/problems/coin-change/

https://leetcode-cn.com/problems/lemonade-change/description/

https://leetcode-cn.com/problems/walking-robot-simulation/description/

