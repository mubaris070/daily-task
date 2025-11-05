var common = function(num1,num2) {
let ans1=0
let ans2=0
for(i=0;i<num1.length;i++){
    if (num2.includes(num1[i])){
        ans1++
    }
}
    for(j=0;j<num2.length;j++){
        if(num1.includes(num2[j])){
          ans2++
        }
    }

return [ans1,ans2]

};
console.log(common([2,3,2],[1,2]))
