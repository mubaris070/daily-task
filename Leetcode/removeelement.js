var remove = function(num,val){
    let i=0;
    for(j=0;j<num.length;j++){
        if(num[j] !== val){
            i++
        }
    }
    return i
}
console.log(remove([1,2,3,4],3));
