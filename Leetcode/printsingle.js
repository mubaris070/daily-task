var singlenum = function(num){
    for(i=0;i<num.length;i++){
        let count = 0
        for(j=0;j<num.length;j++){
            if(num[i] === num[j] && i !== j){
                count++
            }
        }
        if(count === 0)
            return num[i]
        
    }
}
console.log(singlenum([1,4,1,5,4,3,3]));
