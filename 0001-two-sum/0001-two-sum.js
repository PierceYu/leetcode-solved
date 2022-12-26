/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        const targetSum = target - nums[i]
        const index = nums.indexOf(targetSum)
        if(nums.includes(targetSum) && nums.indexOf(targetSum) !== i) return [i, index]
    }
};