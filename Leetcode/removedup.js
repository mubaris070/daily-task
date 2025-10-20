var removedup = function(num){
    if(num.length === 0) return 0;

    let i = 0;
    for(j=1;j <num.length;j++){
        if(num[i] !== num[j]){
            i++
            num[i] = num[j]
        }
    }
    return i+1
}
console.log(removedup([1,2,2,3,3]));
