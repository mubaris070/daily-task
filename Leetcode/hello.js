var hello = function(){
    return function(){
        return "Hello world"
    }
}
console.log(hello()());
