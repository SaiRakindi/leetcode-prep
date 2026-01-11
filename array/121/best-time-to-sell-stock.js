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
