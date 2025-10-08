var addbinary = function(a,b){
   let a1 = parseInt(a,2)
   let a2 = parseInt(b,2)
   let sum =   a1+a2
   return sum.toString(2)
}
console.log(addbinary("11","1"));
