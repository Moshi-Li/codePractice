/*
ID = 66;

Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list,
and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.


Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

*/


/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Javascript parseInt() function would not work for very large numbers
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

var plusOne = function(digits) {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
    digits.reverse()
    
    var carry = 0;
    for (var i = 0; i < digits.length - 1; i ++ ) {
        digits[i] = digits[i] + carry;
        if (digits[i]  > 9) {
            digits[i] = digits[i]-10
            carry = 1
        }
        else {
            carry = 0;
        }
    }
    
    digits[digits.length - 1] = digits[digits.length - 1] + carry
    if (digits[digits.length - 1] > 9 ) {
        digits[digits.length - 1] = digits[digits.length - 1] - 10;
        digits.push(1);
    }
    
    return digits.reverse()

};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))



