var restoreString = function(s, indices) {
    let arr = [s.length]
    for(let i=0;i<s.length;i++){
        arr[indices[i]] === s[i]
    }
    return arr
};
console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]));
