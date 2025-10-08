var transformarray = function(num){
    let arr=[]
    for(i=0;i<num.length;i++){
        if(num[i]%2==0){
           arr.push( num[i] = 0);
        }else{
           arr.push( num[i] = 1);
        }
    }
    arr.sort((a,b) => a-b)
    return arr
}
console.log(transformarray([1,2,4,3,5]));
