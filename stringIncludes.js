var numJewelsInStones = function(jewels, stones) {
    let count=0
    for(i=0;i<stones.length;i++){
    for(j=0;j<jewels.length;j++){
        if(stones[i]===jewels[j]){
            count++
        }
    }
}
    return count
};
console.log(numJewelsInStones("aA","aAAbbbb"));
