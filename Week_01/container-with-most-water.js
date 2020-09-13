/**
 * @param {number[]} height
 * @return {number}
 */

 // 1. 暴力求解，枚举全部可能性，保留最大的一个
 var maxArea1 = function(height) {
     let max = 0
     for (let i = 0; i < height.length - 1; i++) {
         for (let j = i + 1; j < height.length; j++) {
            let wid = j - i
            let hei = height[i] > height[j] ? height[j] : height[i]
            if (wid * hei > max) max =  wid * hei
         }
     }
     return max
};

/* 2. 双指针
* 由外向内夹逼，可以认为夹逼时为当前条件下最大的容量，所以没有必要将全部条件进行枚举
*/
var maxArea2 = function(height) {
    let max = 0
    let i = 0
    let j = height.length - 1

    while (i < j) {
        const wid = j - i
        const hie = height[i] <= height[j] ? height[i] : height[j]
        max = wid * hie >= max ? wid * hie : max
        if (height[i] <= height[j]) {
            i++
        } else {
            j--
        }
    }
    
    return max
};