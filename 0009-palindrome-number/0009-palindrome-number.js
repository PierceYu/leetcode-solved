/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    const reversed = x.toString().split('').reverse().join('')
    
    return x.toString() === reversed ? true : false
};