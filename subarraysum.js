function subarraymax(nums){
    let currentsum = nums[0];
    let  maxsum = nums[0];

    for(i=1;i<nums.length;i++){
        currentsum=Math.max(nums[i],currentsum+nums[i])
        maxsum = Math.max(maxsum,currentsum)
    }
  return maxsum;
}
console.log(subarraymax([1,4,6,3,-9,4,-3]))