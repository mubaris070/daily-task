/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    n1=nums1.sort((a,b) => a - b)
    n2=nums2.sort((a,b) => a - b)
    return n2[0]-n1[0]
    
};