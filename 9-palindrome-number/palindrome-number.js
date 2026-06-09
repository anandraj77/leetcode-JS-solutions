/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const y = String(x).split('').reverse().join('')
    return y==x
};