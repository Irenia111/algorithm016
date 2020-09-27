## 递归模板
```js
// JavaScript
const recursion = (level, params) =>{
   // recursion terminator
   if(level > MAX_LEVEL){
     process_result
     return 
   }
   // process current level
   process(level, params)
   //drill down
   recursion(level+1, params)
   //clean current level status if needed
   
}
```

回溯 -->> 在递归的每一层，进行剪枝处理


## 分制模板
```js
//Javascript
const divide_conquer = (problem, params) => {

  // recursion terminator

  if (problem == null) {

    process_result

    return

  } 

  // process current problem

  subproblems = split_problem(problem, data)

  subresult1 = divide_conquer(subproblem[0], p1)

  subresult2 = divide_conquer(subproblem[1], p1)

  subresult3 = divide_conquer(subproblem[2], p1)

  ...

  // merge

  result = process_result(subresult1, subresult2, subresult3)

  // revert the current level status

}
```

相关题目：

https://leetcode-cn.com/problems/powx-n/

https://leetcode-cn.com/problems/n-queens/

https://leetcode-cn.com/problems/majority-element/description/


## 典型题目

### 排列组合

https://leetcode-cn.com/problems/generate-parentheses/

https://leetcode-cn.com/problems/combinations/

https://leetcode-cn.com/problems/permutations/

https://leetcode-cn.com/problems/permutations-ii/

https://leetcode-cn.com/problems/subsets/

https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/



### 二叉树相关

https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/

https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal

https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/

#### 未完成 & 待优化

二叉树的序列化与反序列化：https://leetcode-cn.com/problems/chou-shu-lcof/ 


验证二叉搜索树： https://leetcode-cn.com/problems/validate-binary-search-tree/
