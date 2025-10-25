var reverseword=function(s){
  let word =  s.trim().split(/\s+/).reverse()
   return word.join(" ")
}
console.log(reverseword( "  hello  world  "));
