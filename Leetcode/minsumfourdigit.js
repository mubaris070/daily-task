var minsum = function(num){
    const nums = num.toString().split("").map(Number) 
    const sorted = nums.sort((a,b)=>a-b)
    let num1=[]
    let  num2=[]
    sorted.filter((num,ind)=>ind % 2 === 0 ? num1.push(num):num2.push(num))
    let number = Number(num1.join(""))
    let number1 =Number( num2.join("") )

    return number+number1
    
}

console.log(minsum([1324]));
