const items=[1,2,3,4,5,6,7,8,9,10];
for(x of items){
    if(x % 3== 0){
        continue;
    }
    console.log(x)
}

//////////////////////////
let arr = [2,3,4,7,9,2,7,3,8]

let set = arr.filter(function(a){
    return arr.indexOf(a) === arr.lastIndexOf(a);
})
console.log(set)



