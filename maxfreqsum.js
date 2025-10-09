var maxFreqSum = function(s) {
   let vowels = "aeiou"
   let maxcount = 0;
   let vowcount = 0
    for(i=0;i<s.length;i++){
     if (vowels.includes(s[i])) continue;
        let count = 1;
        for(j=i+1;j<s.length;j++){
            if(s[i] === s[j]){
                count++
                // console.log(count); 
            }
        }
        if(count > maxcount){
            maxcount = count
        }
    }

for(i=0;i<s.length;i++){
     if (!vowels.includes(s[i])) continue; // skip consonants
        let count1 = 1;
        for(j=i+1;j<s.length;j++){
            if(s[i] === s[j]){
                count1++
            }
        
        }
        if(count1 > vowcount){
            vowcount = count1
    }
}
    return maxcount + vowcount
    
};
console.log(maxFreqSum("aeiaeia"));
