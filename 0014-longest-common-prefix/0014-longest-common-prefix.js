/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    return strs.reduce((prev,curr) => {
        let common = '';
        for(let i = 0; i < curr.length; i++) {
            if(prev[i] === curr[i]) common += prev[i];
            else break;
        }
        return common
    })
};