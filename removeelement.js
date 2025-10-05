var removeelement =function(num,val){
    i = 0;
    for(j=0;j<num.length;j++){
        if(num[j] !== val){
            num[i] = num[j]
            i++;
        }
    }
    return i;
}
let no = [2,3,6,4,2]
console.log(removeelement(no,2))