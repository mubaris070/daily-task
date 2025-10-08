var findwords = function(words,x){
   let result=[];
   for(i=0;i<words.length;i++){
      if(words[i].includes(x)){
         result.push(i)
      }
   }
             return result;
}
console.log(findwords(["heiii","koiii"],"i"));
