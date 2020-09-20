## 本周数据结构
树
### 1. 树
二叉树的定义本事没有后继或便于循环的节点，只有左右节点，比较好的遍历方式就是对左右节点调用相同的递归函数。链表是特殊的二叉树

二叉树解题框架：https://mp.weixin.qq.com/s/izZ5uiWzTagagJec6Y7RvQ

**不同遍历方式，将树结构转化为不同的线性结构**

#### 1.1 树的递归遍历

深度优先（下探到叶子节点）

前序遍历：根 -> 左 -> 右

中序遍历：左 -> 根 -> 右

**二叉搜索树的中序遍历，是数据从小到大排列的顺序数组**

后序遍历：左 -> 右 -> 根

**可以实现二叉搜索树内存的释放，先操作子节点，再根节点**

**二叉树递归遍历代码模板**

<details>
<summary>前序遍历</summary>
<pre><code>
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 前序
var prederTraversal = function(root) {
    let result = []
    function helper (root) {
        if (root == null) return
        // 根节点遍历
        result.push(root.val)
        // 下探左子树
        helper(root.left)
        // 下探右子树
        helper(root.right)
    }
    return result
};
</code></pre>
</details>

<details>
<summary>中序遍历</summary>
<pre><code>
// 中序
var inorderTraversal = function(root) {
    let result = []
    function helper (root) {
        if (root == null) return
        // 下探左子树
        helper(root.left)
        // 根节点遍历
        result.push(root.val)
        // 下探右子树
        helper(root.right)
    }
    return result
};
</code></pre>
</details>

<details>
<summary>后序遍历</summary>
<pre><code>
// 后序
var postorderTraversal = function(root) {
    let result = []
    function helper (root) {
        if (root == null) return
        // 下探左子树
        helper(root.left)
        // 下探右子树
        helper(root.right)
        // 根节点遍历
        result.push(root.val)
    }
    return result
};
</code></pre>
</details>

**N叉树递归遍历代码模板**
<details>
<summary>后序遍历</summary>
<pre><code>
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */

// 后序
var postorder = function(root) {
    let result = []
    function helper (root) {
        if (root == null) return

        // 依次遍历子树
        if (root.children) {
            for (let i = 0; i < root.children.length; i++) {
                helper(root.children[i])
            }
        }
        result.push(root.val)
    }

    helper(root)
    return result
};
</code></pre>
</details>

<details>
<summary>前序遍历</summary>
<pre><code>
var preorder = function(root) {
    let result = []
    function helper (root) {
        if (root == null) return
        result.push(root.val)
        if (root.children) {
            root.children.forEach(item => helper(item))
        }
    }
    helper(root)
    return result
};
</code></pre>
</details>

#### 1.2 树的迭代遍历

**通过栈，模拟调用栈**

**节点的入栈顺序要格外注意**

<details>
<summary>前序遍历---最容易理解的逻辑</summary>
<pre><code>
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 前序
var prederTraversal = function(root) {

    if (root == null) return []

    let result = []

    // 先在栈中存入root
    let stack = [root]

    while (stack.length > 0) {
        
        let cur = stack.pop()
        // 压入结果，节点访问完成
        result.push(cur.val)
        // 前序遍历 根 --》左 --》右
        // 压栈顺序 根 --》右 --》左 
        if (cur.right) stack.push(cur.right)
        if (cur.left) stack.push(cur.left)

    }

    return result
};
</code></pre>
</details>

<details>
<summary>中序遍历</summary>
<pre><code>
// 中序
var inorderTraversal = function(root) {
    if (root == null) return [] 

    let result = []
    // 栈中不需要放入初始元素
    let stack = []

    while (stack.length > 0||root) {
        // 走到root的左子树底点
        while(root) {
            stack.push(root);
            root = root.left;
        }
        // 此时的栈顶是左子树的底端
        root = stack.pop()
        result.push(root.val)
        // 移动到右子树
        root = root.right
    }
    
    return result
};
</code></pre>
</details>

<details>
<summary>后序遍历</summary>
<pre><code>
// 后序
var postorderTraversal = function(root) {
    if (root == null) return []

    let result = []
    // 栈中存入初始元素
    let stack = [root]

    while (stack.length > 0) {
        let cur = stack[stack.length - 1]

        // 如果当前节点没有左右子树, 那么该点推入结果
        if (!cur.left && !cur.right) {
            result.push(cur.val)
            // 清空该节点在栈中的记录
            stack.pop()
        }

        if (cur.right) {
            // 如果存在右子树，将右子树压入栈中
            stack.push(cur.right)
            // 推入栈的点，就将子树置空（相当于标记为已访问
            cur.right = null
        }

        if (cur.left) {
            stack.push(cur.left)
            cur.left = null
        }
        
        //后序遍历的过程中在遍历完左子树跟右子树cur都会回到根结点。所以当前不管是从左子树还是右子树回到根结点都不应该再操作了，应该退回上层。
        //如果是从右边再返回根结点，应该回到上层。
        
    }

    return result
};
</code></pre>
</details>

#### 1.3 树的层序遍历

层序遍历：

若树为空，则空操作返回，否则从树的根节点（第一层），逐层从上至下遍历。在同一层中，从左至右逐个节点访问。

**层序遍历**

广度优先：

非递归方式，采用”队列“，**实现更快查询某元素，常用于“最短路径”**

深度优： 

采用二元组 (node, level) 表示状态，它代表某个节点和它所在的层数，每个新进队列的节点的 level 值都是父亲节点的 level 值加一。最后根据每个点的 level 对点进行分类，分类的时候我们可以利用哈希表，维护一个以 level 为键，对应节点值组成的数组为值，广度优先搜索结束以后按键 level 从小到大取出所有值，组成答案返回即可。

<details>
<summary>二叉树层序遍历--迭代</summary>
<pre><code>
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root == null) return []
    let result = []
    // 广度优先，在迭代前序遍历的基础上，加入对当前层数的记录
    // 这里使用的是队列
    let queue = [root]

    while(queue.length > 0) {
        // 通过queue的长度，标注当前层的节点个数
        let n = queue.length 
        let list = []
        for(let i = 0; i < n; i++) {
            // 取出当前层的节点
            let cur = queue.shift()
            list.push(cur.val)
            // 将当前节点的子节点压入
            if(cur.left)queue.push(cur.left)
            if(cur.right)queue.push(cur.right)
        }

        // 将当前层的节点压入答案
        result.push(list)
    }

    return result

};
</code></pre>
</details>
<details>

<summary>二叉树层序遍历--递归</summary>
<pre><code>
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // 深度优先，将每一层进行保存
    let result = []

    function helper (root, index) {
        if (root == null) return
        if (!result[index]) {
            result[index] = []
        }
        result[index].push(root.val)
        helper(root.left, index + 1)
        helper(root.right, index + 1)
    }

    helper(root, 0)
    return result
}
</code></pre>
</details>

<details>
<summary>N叉树层序遍历--迭代</summary>
<pre><code>
var levelOrder = function(root) {
    if (root == null) return []
    let result = []
    let queue = [root]
    while(queue.length > 0) {
        // 记录当前层的节点数
        let n = queue.length
        let list = []
        for(let i = 0; i < n; i++) {
            let cur = queue.shift()
            list.push(cur.val)
            if(cur.children){
                for(let j = 0; j < cur.children.length; j++) {
                    // 将子节点推入
                    queue.push(cur.children[j])
                }
            }
        }
        result.push(list)
    }
    
    return result
};
</code></pre>
</details>

<details>
<summary>N叉树层序遍历--递归</summary>
<pre><code>
var levelOrder = function(root) {
    let result = []

    function helper (root, index) {
        if (root == null) return
        if (!result[index]) {
            result[index] = []
        }
        result[index].push(root.val)
        for (let i = 0; i < root.children.length; i++) {
            helper(root.children[i], index + 1)
        }
    }

    helper(root, 0)
    
    return result
};
</code></pre>
</details>



### 2. 堆
满足下面两个条件的就是堆：

* 堆是一个完全二叉树
* 堆上的任意节点值都必须大于等于（大顶堆）或小于等于（小顶堆）其左右子节点值

如果堆上的任意节点都**大于等于**子节点值，则称为**大顶堆**

如果堆上的任意节点都**小于等于**子节点值，则称为**小顶堆**

也就是说，在**大顶堆**中，**根节点**是堆中**最大**的元素；

在**小顶堆**中，**根节点**是堆中**最小**的元素；

参考链接：

https://github.com/sisterAn/JavaScript-Algorithms/issues/60

#### 2.1 堆的实现
堆可以用一个数组表示（因为堆是完全二叉树），给定一个节点的下标 i （i从1开始） ，那么它的父节点一定为 A[i/2] ，左子节点为 A[2i] ，右子节点为 A[2i+1]

**创建一个大顶堆（小顶堆）**

偷懒：因为js里没有直接可使用的堆api，所以拿数组结合sort模拟，也是可行的

常用的方式有两种：

* 插入式创建：每次插入一个节点，实现一个大顶堆（或小顶堆）

* 原地创建：又称堆化，给定一组节点，实现一个大顶堆（或小顶堆）


##### 2.1.1 插入式创建
插入节点：

* 将节点插入到队尾
* **自下往上**堆化： 将插入节点与其父节点比较，如果插入节点大于父节点（大顶堆）或插入节点小于父节点（小顶堆），则插入节点与父节点调整位置
* 一直重复上一步，直到不需要交换或交换到根节点，此时插入完成。

```js
function insert(key) {
    items.push(key)
    // 获取存储位置
    let i = items.length-1 
    // 将插入节点与其父节点比较
    while (i/2 > 0 && items[i] > items[i/2]) {  
        swap(items, i, i/2); // 交换 
        // 节点移至父节点，比较父节点与它的父节点
        i = i/2; 
    }
}  
function swap(items, i, j) {
    let temp = items[i]
    items[i] = items[j]
    items[j] = temp
}
```

时间复杂度： O(logn)，为树的高度

##### 2.1.2 原地创建
原地建堆的方法有两种：一种是承袭上面插入的思想，即从前往后、自下而上式堆化建堆；与之对应的另一种是，从后往前、自上往下式堆化建堆。其中

* **自下而上式堆化** ：将节点与其父节点比较，如果节点大于父节点（大顶堆）或节点小于父节点（小顶堆），则节点与父节点调整位置
* **自上往下式堆化** ：将节点与其左右子节点比较，如果存在左右子节点大于该节点（大顶堆）或小于该节点（小顶堆），则将子节点的最大值（大顶堆）或最小值（小顶堆）与之交换

所以，自下而上式堆是调整节点与父节点（往上走），自上往下式堆化是调整节点与其左右子节点（往下走）。

**1. 从前往后、自下而上式堆化建堆**
这里以小顶堆为例

```js
// 原地建堆
function buildHeap(items, heapSize) {
    while(heapSize < items.length - 1) {
        heapSize ++
        heapify(items, heapSize)
    }
}

function heapify(items, i) {
    // 自下而上式堆化
    while (Math.floor(i/2) > 0 && items[i] < items[Math.floor(i/2)]) {  
        swap(items, i, Math.floor(i/2)); // 交换 
        i = Math.floor(i/2); 
    }
}  

function swap(items, i, j) {
    let temp = items[i]
    items[i] = items[j]
    items[j] = temp
}

// 测试
var items = [,5, 2, 3, 4, 1]
// 初始有效序列长度为 1
buildHeap(items, 1)
console.log(items)
// [empty, 1, 2, 3, 5, 4]
```

**2. 从后往前、自上而下式堆化建堆**

这里以小顶堆为例

注意：**从后往前并不是从序列的最后一个元素开始**，而是从最后一个**非叶子节点**开始，这是因为，叶子节点没有子节点，不需要自上而下式堆化。

最后一个子节点的父节点为 n/2 ，所以从 n/2 位置节点开始堆化

```js
// 原地建堆
// items: 原始序列
// heapSize: 初始有效序列长度
function buildHeap(items, heapSize) {
    // 从最后一个非叶子节点开始，自上而下式堆化
    for (let i = Math.floor(heapSize/2); i >= 1; --i) {    
        heapify(items, heapSize, i);  
    }
}
function heapify(items, heapSize, i) {
    // 自上而下式堆化
    while (true) {
        var minIndex = i;
        if(2*i <= heapSize && items[i] > items[i*2] ) {
            minIndex = i*2;
        }
        if(2*i+1 <= heapSize && items[minIndex] > items[i*2+1] ) {
            minIndex = i*2+1;
        }
        if (minIndex === i) break;
        swap(items, i, minIndex); // 交换 
        i = minIndex; 
    }
}  
function swap(items, i, j) {
    let temp = items[i]
    items[i] = items[j]
    items[j] = temp
}

// 测试
var items = [,5, 2, 3, 4, 1]
// 因为 items[0] 不存储数据
// 所以：heapSize = items.length - 1
buildHeap(items, items.length - 1)
console.log(items)
// [empty, 1, 2, 3, 4, 5]
```

#### 2.2 堆的应用

top K 问题 中位数 堆排序

###### 题目

前 K 个高频元素/ 数组中的第K个最大元素：维护一个小顶堆

滑动窗口最大值/ 最小的 k 个数：维护一个大顶堆

丑数：构造一个元素个数为n的大顶堆，结果返回堆顶

### 待解锁
#### 知识
图  堆(实现堆)

#### 未完成 & 待优化
丑数： https://leetcode-cn.com/problems/chou-shu-lcof/ 

      https://leetcode-cn.com/problems/ugly-number-ii/



连通图个数： https://leetcode-cn.com/problems/number-of-islands/ 