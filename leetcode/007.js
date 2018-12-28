function reverse(x) {
    if (x === 0) {return x}
    else if (x > 0) {
        var result = parseInt(x.toString().split('').reverse().join(''))
        if (result > Math.pow(2,31) - 1 ) {return 0}
        return result;
    }
    else {
        var result = x*(-1)
        result = parseInt(result.toString().split('').reverse().join(''))
        if (result > Math.pow(2,31) - 1) {return 0}
        return result * -1; 
    }
}