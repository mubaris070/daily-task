var numberGame = function(nums) {
        nums.sort((a,b)=>a-b)
        let result = []
    for(i=0;i<nums.length;i+=2){
       let alice = nums[i]
       let bob = nums[i+1]
       result.push(bob,alice)
    }
    return  result
    
    
};
console.log(numberGame([4,4,3,8]));
