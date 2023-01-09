/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    if(!n) return nums1;
    if(m === 0) {
    for(let i = n-1; i >= m; i--) {
        nums1[i] = nums2[i]
    }
    }else {
         for(let i = m+n-1; i >= m; i--) {
        nums1[i] = nums2[i-m]
    }
    }
    
    if(!m && nums2.length === 1) nums1[0] = nums2[0]
    
    return nums1.sort((a,b)=> a-b)
};