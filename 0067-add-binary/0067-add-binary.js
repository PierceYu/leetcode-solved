/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    if(a === '1' && b === '1') return '10';
    
    const maxLength = Math.max(a.length, b.length);
    
    a = a.split('').reverse();
    b = b.split('').reverse();
    
    let result = [];
    
    let carry = 0;
    
    for(let i = 0; i < maxLength; i++) {
        
        const firstNum = Number(a[i]) || 0;
        const secondNum = Number(b[i]) || 0;
        
        const sum = firstNum + secondNum + carry;
        
        if(sum <= 1) {result.unshift(`${sum}`); carry = 0};
        if(sum === 2) {result.unshift('0'); carry = 1;}
        if(sum > 2) {result.unshift('1'); carry = 1;}
    }

    if((result[0] === '0' && result.length > 1) || carry === 1) result.unshift('1')
    
    return result.join('')
};