/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // 数组排序 + 遍历
    /*
    nums.sort((a,b) => b - a)
    return nums[k-1]
    */
    // 借助 堆 实现
    // 原地建堆，从后往前，自上而下式建小顶堆
    let buildHeap = (arr, k) => {
        if(k === 1) return
        // 从最后一个非叶子节点开始，自上而下式堆化
        // 感觉就是二分排序
        for(let i = Math.floor(k/2); i>=1 ; i--) {
            heapify(arr, k, i)
        }
    }

    // 堆化
    let heapify = (arr, k, i) => {
    // 自上而下式堆化
        while(true) {
            let minIndex = i
            if(2*i <= k && arr[2*i] < arr[i]) {
                minIndex = 2*i
            }
            if(2*i+1 <= k && arr[2*i+1] < arr[minIndex]) {
                minIndex = 2*i+1
            }
            if(minIndex !== i) {
                swap(arr, i, minIndex)
                i = minIndex
            } else {
                break
            }
        }
    }

    // 交换
    let swap = (arr, i , j) => {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    // 突然感觉，这个和滑动窗口有丝丝联系啊！！！还有快慢指针求链表的倒数k个元素
    let n = nums.length
    // 1. 实现一个 k 个元素的小顶堆，堆顶就是最小的第k个元素
    let min_heap = []
    // 堆顶从 index 为 1 开始
    min_heap[0] = 0

    for (let i = 0; i < n; i++) {
        if (i < k) {
            // 构建小顶堆
            min_heap[i+1] = nums[i]
            // 对堆进行排序（插入的时候就进行排序吧）
            // 先偷个懒
            if (i === k -1 ) buildHeap(min_heap, k)
            // min_heap.sort((a, b) => a - b )
        } else {
            // 每个元素要和堆顶比较，如果小，就跳过，如果大，就要插入heap
            if (nums[i] <= min_heap[1]) continue
            if (nums[i] > min_heap[1]) {
                // 如果大于堆顶元素，则将这个元素替换掉堆顶元素，然后再堆化成一个小顶堆。
                min_heap[1] = nums[i]
                heapify(min_heap, k, 1)

            }

        }
    }


    return min_heap[1]
};