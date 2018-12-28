var intToRoman = function(num) {
    var T = [];
    T.push([1,'I']);
    T.push([4,'IV']);
    T.push([5,'V']);
    T.push([9,'IX']);
    T.push([10,'X']);
    T.push([40,'XL']);
    T.push([50,'L']);
    T.push([90,'XC']);
    T.push([100,'C']);
    T.push([400,'CD']);
    T.push([500,'D']);
    T.push([900,'CM']);
    T.push([1000,'M']);

    T.reverse();

    var n = num;
    var str = '';
    while ( n !== 0) {
        for (var i = 0; i < T.length; i++) {
            if (n >= T[i][0]) {
                n = n - T[i][0];
                str += T[i][1];
                break;
            }
        }
    }
    return str;

};