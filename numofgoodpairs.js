var numofgoodPairs = function(nums) {
    let pair=[]
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i] == nums[j] && i < j){
                pair.push([i,j])
            }
        }
    }
    return pair.length
};
console.log(numofgoodPairs([1,2,3,1,1,3]));
