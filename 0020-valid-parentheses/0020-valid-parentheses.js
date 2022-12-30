/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    s = s.replace(/[^(){}[\]]/g, '');
    const stack = [];
    const map = {
        '(' : ')',
        '[' : ']',
        '{' : '}',
    };
    
    for(const element of s) {
        map[stack[stack.length-1]] === element ? stack.pop() : stack.push(element)
    }
  return !stack.length
};

