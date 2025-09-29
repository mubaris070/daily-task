function str(num){
    
        if(num % 3 == 0 && num % 5 == 0){
            console.log(`${num}:fizzBuzz`)
        }
        else if(num % 3 == 0){
            console.log(`${num}:Buzz`)
        }
        else if(num % 5 == 0){
            console.log(`${num}:fizz`)
        }
        else{
            console.log("null")
        }
        return str;

    }
str(10);



function rev(str){
    if(str[0]) return ;
        return rev(str.length-1)

}
console.log(rev("mubaris"))


