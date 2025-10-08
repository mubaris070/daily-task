var sortArrayByParity = function(nums) {
   let arr = nums.sort((a,b)=>{
        if(a%2 === 0 && b%2 !==0){
            return -1
        }
        if(a%2 !==0 && b%2 === 0){
            return 1
        }
    })
    return arr
};
console.log(sortArrayByParity([3,1,2,4]));
