const plusone = function(digit){
      for(i=digit.length-1; i >=0; i--){
          digit[i] += 1;
          if(digit[i] < 10){
            return digit
          }
          digit[i] = 0;
      }
       digit.unshift(1);
          return digit
}
console.log(plusone([1,2,9]));
