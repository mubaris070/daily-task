var removezero = function(num){
    while(num % 10 === 0 && num !==0){
        num = num/10
    }
    return num.toString()
}
console.log(removezero(132400));
