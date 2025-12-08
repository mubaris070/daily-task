/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let w1 = s.trim().split(" ")
    return w1[w1.length - 1].length;
};