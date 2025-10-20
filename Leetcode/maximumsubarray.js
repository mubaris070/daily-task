var maxsubarray = function(n){
    let maxsum = [0]
    let currentsum = [0]

    for(i=1;i<n.length;i++){
     currentsum  = Math.max(n[i],currentsum+n[i])
     maxsum = Math.max(currentsum,maxsum)
    }
    return maxsum
}
console.log(maxsubarray([-2,1,-3,4,-1,2,1,-5,4]));
