var moveZeroesToFront = function(nums) {
    
    let i = 0
    let j = 0

    for ( i; i < nums.length; i++) {

        if(nums[i] !== 0) {
            let tmp = nums[i]
            nums[i] = nums[j]
            nums[j] = tmp
            // j指向的位置已为非0，j需要后移
            // j一直比走的慢
            j++
        
        }
    }
};
