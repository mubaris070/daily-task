var differenceOfSum = function(nums) {
    let sum = 0;
    let digitsum = 0;
    for(i=0;i<nums.length;i++){
      sum = sum+nums[i]
    }
    for(let num of nums){
        while(num > 0){
           digitsum +=num%10;
            num = Math.floor(num/10);
        }
    }
   let ans =sum-digitsum;
       return ans;
};
