var smallerNumbersThanCurrent = function(nums) {
    let arr = []
    for(i=0;i<nums.length;i++){
        let count=0
    for(j=0;j<nums.length;j++){
        if(nums[j] < nums[i]){
             count++
        }
    }
             arr.push(count)
    }
return arr

    
};
console.log(smallerNumbersThanCurrent([1,2,5,6,8,3]));
