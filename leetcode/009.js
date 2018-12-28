function isPalindrome(num) {
    if (num < 0) {return false}
    var inverse = parseInt(num.toString().split('').reverse().join(''))
    if (num === inverse) {return true}
    else {return false}
}