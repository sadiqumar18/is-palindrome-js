var assert = require('assert');
var isPalindrome = require('./lib/is-palindrome.js');

describe('Palindrome test', function () {
    it('Is palindrome', function () {
        assert.equal(true, isPalindrome(''));
        assert.equal(true, isPalindrome('a'));
        assert.equal(true, isPalindrome('aba'));
        assert.equal(true, isPalindrome('abba'));
        assert.equal(true, isPalindrome('abba'));
    });
    
    it('Not palindrome', function () {
        assert.equal(false, isPalindrome(123));
        assert.equal(false, isPalindrome('ab'));
        assert.equal(false, isPalindrome('abc'));
        assert.equal(false, isPalindrome('abbb'));
        assert.equal(false, isPalindrome('abbab'));
    });
});