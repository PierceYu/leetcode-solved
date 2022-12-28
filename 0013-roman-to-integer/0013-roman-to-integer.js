/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
    }
    
    let result = 0;
    
    for(let i = 0; i < s.length; i++){
        const current = s[i];
        const next = s[i+1];
        
        if(map[current] >= map[next] || next === undefined) {
            result += map[current]
        } else {
            result += map[next] - map[current];
            i++
        }
        
    }
    
    return result;
};