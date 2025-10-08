var addpromises=async function(p1,p2){
    const a =await p1
    const b =await p2
    return a+b;
}
addpromises(Promise.resolve(5),Promise.resolve(7))
  .then(console.log)