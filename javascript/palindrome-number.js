/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let x_str = String(x)
    if (x >= 0) {
        return x_str.split('').reverse().join('') === x_str;
    } else {
        return false
    }
};