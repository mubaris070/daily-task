var recoverOrder = function(order, friends) {
    let orders =[]
    for(i=0;i<order.length;i++){
    if(friends.includes(order[i])){
         orders.push(order[i])
    }
}
    return orders
    
};
console.log(recoverOrder([3,1,2,5,4],[1,3,4]));
