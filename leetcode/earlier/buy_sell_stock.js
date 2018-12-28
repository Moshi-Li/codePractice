/*
id = 309
*/


var maxProfit = function(prices) {
    if (prices.length == 0 || prices.length == 1) {
        return 0
    }
    if (prices.length == 2) {
        return Math.max(0, prices[1] - prices[0])
    }
    
    var hold = [];
    var unhold = [];
    
    hold.push(-prices[0]);
    unhold.push(0)
    
    hold.push(Math.max(hold[0], -prices[1]))
    unhold.push(Math.max(hold[0]+prices[1], unhold[0]))
    
    
    for (var i = 2; i < prices.length; i++) {


        hold.push(Math.max( hold[i-1],unhold[i-2] - prices[i] ))


        unhold.push(Math.max(hold[i-1]+prices[i],unhold[i-1]))

    }
    

    return unhold[prices.length-1];
 
};


console.log(maxProfit([1,2,3,0,2]))