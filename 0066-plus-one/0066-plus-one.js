/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    digits[digits.length-1] += 1;
    
    for(let i = digits.length-1; i >=0; i--) {
        if(digits[i] === 10) {
            digits[i] = 0;
            digits[i-1] +=1;
        }
    }
    
    if(digits[0] === 0) digits.unshift(1);
    
    return digits;
};