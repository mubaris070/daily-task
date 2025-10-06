var minimumsum = function(num){
     const digit = num.toString().split("").map(Number)
     const sorted = digit.sort((a,b) => a-b)
    //  return sorted
    let num1=[];
    let num2=[];
 sorted.filter((num,ind)=>ind % 2 === 0 ?num1.push(num):num2.push(num))
   let number1 = num1.join('')
   let number2  = num2.join('')
   return(Number(number1)+Number(number2)) 
   
}
console.log(minimumsum([2932]));
