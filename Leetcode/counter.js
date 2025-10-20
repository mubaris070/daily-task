var counter = function(n){
    return function(){
        return n++
    }

}

const c = counter(12)
console.log(c());
console.log(c());

