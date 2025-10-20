var addone = function(num){
    for(i=num.length-1;i>=0;i--){
        num[i]=num[i]+1
        if(num[i]<10){
            return num
        }
        num[i]=0  
    }
    num.unshift(1)
    return num
}
console.log(addone([1,3,9]));
