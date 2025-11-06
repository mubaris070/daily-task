var kidsWithCandies = function(candies, extraCandies) {
    let out=[]
    let max = Math.max(...candies)
    for(i=0;i<candies.length;i++){
        out.push(candies[i] + extraCandies >=  max)
    }
    return out
    
};
console.log(kidsWithCandies([2,3,5,1,3],3));
