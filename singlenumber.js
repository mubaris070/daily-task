var singlenumber = function(num){
    for(i=0;i<num.length;i++){
        let count = 0;
        for(j=0;j<num.length;j++){
            if(num[i] === num[j] && i !== j){
                count++;
            }
        }
        if(count === 0){
            return(num[i])
        }
    }
}
console.log(singlenumber([2,2,3]));
