var truncate = function(s,k) {
    let rev = s.split(" ").slice(0,k).join(" ")
    return rev
};
console.log(truncate("abcdefd is low height ok",4));
