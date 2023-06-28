/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   for(let i = 0; i < s.length; i++) {
       for(let j = 0; j < t.length; j++){
           if(t[j] === s[i]) {
             s = s.replace(s[i],'');
             t = t.replace(t[j],'');
             i = 0;
             j = 0;
             }
             if(s === t) return true
       }
   }
    
    return false
};