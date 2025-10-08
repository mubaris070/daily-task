var commonChars = function(words) {
    let dup=[]
    for(let char of words[0]){
           if (words.every(word => word.includes(char))) {
                dup.push(char)
               words = words.map(word => word.replace(char, ""));

            }
        }
    
    
    return dup
};
console.log(commonChars(["bella","lr","roller"]));
