'use strict';

var isPalindrome = function (str) {
    if (typeof str !== 'string') {
        return false;
    }
    
    return str.split('').reverse().join('') === str;
};

module.exports = isPalindrome;