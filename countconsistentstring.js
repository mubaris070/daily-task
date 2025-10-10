var countConsistentStrings = function(allowed, words) {
    let count = 0;
    for(let word of words){
        let isvalid = true;
    
    for(let char of word){
        if(!allowed.includes(char)){
           isvalid = false;
           break;
        }
    }
    if(isvalid) count++
    }
    return count

};
console.log(countConsistentStrings( "abc", ["ad","b","c","ab","ac","bc","abc"]));
