/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    // 构成一个大顶堆
    let heap = []
    for (let i = 0; i < arr.length; i++) {
        if ( i < k) {
            heap.push(arr[i])
            // 初始化堆，并排序
            if (i === k - 1) heap.sort((a,b) => b - a)
        } else {
            // 当当前元素小于堆顶元素，替换堆顶
            if (heap[0] >= arr[i]) {
                heap[0] = arr[i]
                heap.sort((a,b) => b - a)
            }
        }
    }
    return heap
};