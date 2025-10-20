var filter = function(arr, fn) {
  const arr1=  arr.filter((value,index)=>fn(value,index))
    return arr1

}
console.log(filter([10,20,30],n => n > 11));
