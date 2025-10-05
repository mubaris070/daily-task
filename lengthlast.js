var lengthoflast = function(str){
     str = str.trim()
     let word = str.split(" ")
   return word [ word.length-1].length
}

console.log(lengthoflast(" hi shabeeb"));
