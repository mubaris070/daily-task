var sortpeople = function(names,heights){
    
    const people = names.map((name,i)=>({name,height:heights[i]}))
    const sorted= people.sort((a,b)=>b.height-a.height)
     let out = sorted.map(per=>per.name)
     return out
    
     
}
console.log(sortpeople(["Mary","John","Emma"],[180,165,170]))
