var reverseBits = function(n) {
    let num = n.toString(2).padStart(32,'0')
    let numrev = num.split("").reverse().join("")
    let dec = parseInt(numrev,2)
    return dec
};
console.log(reverseBits(2));
