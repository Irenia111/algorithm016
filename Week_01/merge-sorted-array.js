/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // 复制一份nums1
    // 从后向前添加，这样就不需要额外空间

     if (n === 0) return
     if (m === 0) {
        for (let i = 0; i<n; i++) {
            nums1[i] = nums2[i]
        }
        return
    }

    // p1是nums1的尾指针
    let p1 = m - 1
    // p2是nums2的尾指针
    let p2 = n - 1
    let end = n + m - 1
    while (p1 >= 0 && p2 >= 0) {
        nums1[end--] = nums1[p1] < nums2[p2] ? nums2[p2--] : nums1[p1--]
    }
    // 循环在 p2 或者 p1 为0时停止，所以nums1的前半部分需要重新写入！！！
    if (p2 >= 0) {
        for (let i = 0; i <= p2; i++) {
            nums1[i] = nums2[i]
        }
    }
    // nums1[0] = nums1[0] < nums2[0] ? nums1[0] : nums2[0]
};