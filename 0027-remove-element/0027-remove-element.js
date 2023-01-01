/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let index = 0;
    const max = Math.max(...nums);
    for(let i = 0; i < nums.length; i++) {
        (nums[i] === val) ? nums[i] = max + val : index++;
    }
    
    nums.sort((a,b)=>a-b)
    
    return index;
};