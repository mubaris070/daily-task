var arrayStringsAreEqual = function(word1, word2) {
    
    const res = word1.join("")
    const res1 =word2.join("")

    const isequal = res === res1
    
return isequal

    
};
console.log(arrayStringsAreEqual(["ab","c"],["a","bc"]));
