/*
121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104

*/

var maxProfit = function (prices) {
  // 202/220 testcases passed
  // let profitMax = 0;

  // for(let i = 0; i < prices.length ; i++) {

  //     for(let j = i + 1; j < prices.length; j++) {
  //         profitMax = Math.max(prices[j] - prices[i], profitMax);

  //         if(profitMax < 0) profitMax = 0;

  //     }
  // }

  // return profitMax;

  //Optimized approach
  let buyPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    buyPrice = prices[i] > buyPrice ? buyPrice : prices[i];
    maxProfit = Math.max(maxProfit, prices[i] - buyPrice);

    if (maxProfit < 0) maxProfit = 0;
  }

  return maxProfit;
};
